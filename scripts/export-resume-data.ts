import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { appPortfolio, education, experiences, maintenanceApps, profile, projects } from "../src/app/data/content";

const output = resolve(process.cwd(), "tmp/pdfs/resume-data.json");
mkdirSync(dirname(output), { recursive: true });

const projectRecord = (project: (typeof projects)[number]) => ({
  slug: project.slug,
  title: project.shortTitle,
  summary: project.summary,
  signal: project.publicSignal?.includes("installs") ? project.publicSignal.split(" on ")[0] : project.category,
  stack: project.stack.slice(0, 4),
  url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadshahroze.dev"}/projects/${project.slug}`,
});

writeFileSync(output, JSON.stringify({
  profile,
  experiences,
  education,
  scratchProjects: appPortfolio.filter((app) => app.workType === "from-scratch").map((app) => projects.find((project) => project.slug === app.slug)).filter((project): project is (typeof projects)[number] => Boolean(project)).map(projectRecord),
  otherProjects: projects.filter((project) => project.workType !== "from-scratch" && !["production-improvements", "android-billing-platform"].includes(project.slug)).map(projectRecord),
  maintenanceApps: appPortfolio.filter((app) => app.workType === "maintenance").map((app) => maintenanceApps.find((record) => record.slug === app.slug)).filter((app): app is (typeof maintenanceApps)[number] => Boolean(app)).map((app) => ({ title: app.title, signal: app.signal, contribution: app.contribution, url: app.playUrl })),
}, null, 2));

console.log(output);
