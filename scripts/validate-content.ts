import { existsSync } from "node:fs";
import { join } from "node:path";
import { appPortfolio, featuredApps, insights, maintenanceApps, profile, projects, scratchProjects, skillGroups } from "../src/app/data/content";

const failures: string[] = [];
const assert = (condition: unknown, message: string) => { if (!condition) failures.push(message); };
const unique = (values: string[]) => new Set(values).size === values.length;
const validUrl = (value: string) => { try { return new URL(value).protocol === "https:"; } catch { return false; } };
const mediaExists = (src: string) => existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")));

assert(projects.length === 16, `Expected 16 project stories, found ${projects.length}.`);
assert(scratchProjects.length === 12, `Expected 12 from-scratch apps, found ${scratchProjects.length}.`);
assert(projects.filter((project) => project.featured).length === 4, "Exactly four flagship projects must be featured.");
assert(maintenanceApps.length === 6, `Expected six maintained apps, found ${maintenanceApps.length}.`);
assert(appPortfolio.length === 18, `Expected 18 public apps, found ${appPortfolio.length}.`);
assert(appPortfolio.every((app, index) => index === 0 || appPortfolio[index - 1].installCount >= app.installCount), "Public apps must be ordered by descending install band.");
assert(featuredApps.length === 4 && featuredApps.every((app) => app.installCount >= 100_000), "Home must feature four apps from the strongest public install bands.");
assert(insights.length === 3, `Expected three launch insights, found ${insights.length}.`);
assert(skillGroups.length === 8, `Expected eight skill groups for the two-column layout, found ${skillGroups.length}.`);
assert(unique(projects.map((project) => project.slug)), "Project slugs must be unique.");
assert(unique(insights.map((insight) => insight.slug)), "Insight slugs must be unique.");

for (const project of projects) {
  assert(Boolean(project.title && project.summary && project.period), `${project.slug}: missing core copy.`);
  assert(Boolean(project.ownership && project.teamBoundary), `${project.slug}: missing ownership boundary.`);
  assert(project.stack.length > 0, `${project.slug}: missing technical stack.`);
  if (project.playUrl) assert(validUrl(project.playUrl), `${project.slug}: invalid Play URL.`);
  if (/\d+(?:K|M)\+/.test(project.publicSignal || "")) {
    assert(Boolean(project.playUrl || project.slug === "production-improvements"), `${project.slug}: public install metric has no source link.`);
    assert(Boolean(project.verifiedAt && !Number.isNaN(Date.parse(project.verifiedAt))), `${project.slug}: public metric has no valid checked date.`);
  }
  for (const media of project.media) {
    assert(Boolean(media.alt.trim()), `${project.slug}: media is missing alt text.`);
    assert(mediaExists(media.src), `${project.slug}: missing local media ${media.src}.`);
  }
}

for (const app of maintenanceApps) {
  assert(validUrl(app.playUrl), `${app.slug}: invalid Play URL.`);
  assert(Boolean(app.contribution), `${app.slug}: missing exact contribution label.`);
  assert(Boolean(app.verifiedAt && !Number.isNaN(Date.parse(app.verifiedAt))), `${app.slug}: install signal has no checked date.`);
  for (const media of app.media) {
    assert(Boolean(media.alt.trim()), `${app.slug}: media is missing alt text.`);
    assert(mediaExists(media.src), `${app.slug}: missing local media ${media.src}.`);
  }
}

for (const insight of insights) {
  assert(insight.sections.length >= 4, `${insight.slug}: article is not substantial enough.`);
  assert(!Number.isNaN(Date.parse(insight.published)), `${insight.slug}: invalid publication date.`);
  assert(!Number.isNaN(Date.parse(insight.updated)), `${insight.slug}: invalid update date.`);
}

const billing = projects.find((project) => project.slug === "android-billing-platform");
assert(Boolean(billing), "Billing platform story is missing.");
assert(!/50\+|Top Edge|Appsqueeze/i.test(JSON.stringify(billing)), "Billing story exposes a prohibited identity or exact adoption count.");
assert(projects.filter((project) => project.slug !== "android-billing-platform").every((project) => !project.related?.includes("android-billing-platform")), "Billing platform must not appear in related project links.");
assert(insights.every((insight) => !insight.relatedProjects.includes("android-billing-platform")), "Billing platform must not appear in related insight links.");
assert(!/(?:tel:|\+92|03\d{2}[ -]?\d{7})/i.test(JSON.stringify(profile)), "Public profile contains a phone number.");

if (failures.length) {
  console.error(`Content validation failed (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Content validation passed: ${projects.length} project stories, ${maintenanceApps.length} maintenance records, ${insights.length} insights.`);
