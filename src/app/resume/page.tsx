import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import ResumeActions from "../components/ResumeActions";
import { appPortfolio, education, experiences, maintenanceApps, profile, projects } from "../data/content";

export const metadata: Metadata = { title: "Résumé", description: "Résumé of Muhammad Shahroze, Android engineer with 3+ years of Kotlin and production Android experience.", alternates: { canonical: "/resume" } };

const skillGroups = [
  ["Android", "Kotlin · Jetpack Compose · XML · Material Design · Android SDK"],
  ["Architecture", "Clean Architecture · MVVM · Room · Koin · Hilt · modular boundaries"],
  ["Networking & data", "Ktor · Retrofit · REST APIs · Firebase · SQLite · MongoDB"],
  ["Platform & product", "Maps · Calendar · Drive · Billing · RevenueCat · AdMob · media · sensors"],
  ["Quality & delivery", "Crashlytics · Analytics · Remote Config · crash/ANR triage · Git · Play release"],
  ["Additional", "Java · JavaScript · TypeScript · Next.js · Node.js · Socket.io"],
];

const otherProjects = projects.filter((project) => project.workType !== "from-scratch" && !["production-improvements", "android-billing-platform"].includes(project.slug));
const sortedScratchProjects = appPortfolio.filter((app) => app.workType === "from-scratch").map((app) => projects.find((project) => project.slug === app.slug)).filter((project): project is (typeof projects)[number] => Boolean(project));
const sortedMaintenanceApps = appPortfolio.filter((app) => app.workType === "maintenance").map((app) => maintenanceApps.find((record) => record.slug === app.slug)).filter((app): app is (typeof maintenanceApps)[number] => Boolean(app));

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  return <article className="grid gap-3 border-t border-black/20 py-5 md:grid-cols-[1fr_.55fr_auto] md:items-start"><div><h3 className="font-display text-xl font-semibold tracking-[-.035em]">{project.shortTitle}</h3><p className="mt-2 text-sm leading-relaxed text-stone-600">{project.summary}</p></div><div><p className="font-mono text-[.58rem] uppercase tracking-[.07em] text-blue-700">{project.publicSignal || project.category}</p><p className="mt-2 text-xs leading-relaxed text-stone-500">{project.stack.slice(0, 4).join(" · ")}</p></div><Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`} className="grid size-9 place-items-center border border-black/20 hover:bg-black hover:text-white"><ArrowUpRight size={13} /></Link></article>;
}

export default function ResumePage() {
  return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}>
    <section className="container-wide flex flex-col gap-7 py-12 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">Résumé / Android engineering</p><h1 className="display-lg mt-7">Experience built in production.</h1><p className="body-xl mt-7 max-w-3xl">A complete record of Android product delivery, platform work, production maintenance, education, and technical capability.</p></div><ResumeActions /></section>
    <article className="container-wide mb-20 border border-black/20 bg-[#faf9f5] p-6 md:p-12">
      <header className="grid gap-7 border-b border-black/20 pb-9 md:grid-cols-[1fr_auto] md:items-end"><div><p className="font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">{profile.name}</p><p className="mt-3 text-xl text-blue-700">Android Engineer</p><p className="mt-4 max-w-3xl leading-relaxed text-stone-600">Android engineer with 3+ years of experience building and maintaining native products across maps, productivity, AI-backed utilities, media, billing, Firebase, monetization, and production reliability.</p></div><div className="space-y-2 text-sm text-stone-600 md:text-right"><p>{profile.email}</p><p>{profile.linkedin.replace("https://", "")}</p><p>{profile.github.replace("https://", "")}</p><p className="flex items-center gap-2 md:justify-end"><MapPin size={14} /> {profile.location}</p></div></header>

      <section className="py-9"><h2 className="eyebrow">Professional experience</h2><div className="mt-8 space-y-10">{experiences.map((experience) => <div key={experience.company} className="grid gap-4 md:grid-cols-[.36fr_1fr]"><div><h3 className="font-display text-xl font-semibold">{experience.title}</h3><p className="mt-2 text-blue-700">{experience.company}</p><p className="mt-2 font-mono text-[.6rem] uppercase tracking-[.08em] text-stone-500">{experience.period}</p></div><ul className="space-y-2">{experience.points.map((point) => <li key={point} className="border-b border-black/10 pb-2 text-sm leading-relaxed text-stone-600">{point}</li>)}</ul></div>)}</div></section>

      <section className="border-t border-black/20 py-9"><div><h2 className="eyebrow">Project experience</h2><p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-600">Android products engineered from scratch, earlier projects, and inherited products improved in production.</p></div>
        <h3 className="mt-9 font-display text-3xl font-semibold tracking-[-.045em]">Engineered from scratch</h3><div className="mt-4">{sortedScratchProjects.map((project) => <ProjectRow key={project.slug} project={project} />)}</div>
        <h3 className="mt-10 font-display text-3xl font-semibold tracking-[-.045em]">Earlier work</h3><div className="mt-4">{otherProjects.map((project) => <ProjectRow key={project.slug} project={project} />)}</div>
        <h3 className="mt-10 font-display text-3xl font-semibold tracking-[-.045em]">Production maintenance</h3><div className="mt-4">{sortedMaintenanceApps.map((app) => <article key={app.slug} className="grid gap-3 border-t border-black/20 py-5 md:grid-cols-[1fr_.7fr_auto] md:items-center"><div><h4 className="font-display text-xl font-semibold tracking-[-.035em]">{app.title}</h4><p className="mt-1 font-mono text-[.58rem] uppercase tracking-[.07em] text-blue-700">{app.signal}</p></div><p className="text-sm leading-relaxed text-stone-600">{app.contribution}</p><a href={app.playUrl} target="_blank" rel="noreferrer" aria-label={`${app.title} on Google Play`} className="grid size-9 place-items-center border border-black/20 hover:bg-black hover:text-white"><ArrowUpRight size={13} /></a></article>)}</div>
      </section>

      <section className="grid gap-10 border-t border-black/20 py-9 md:grid-cols-[1.15fr_.85fr]"><div><h2 className="eyebrow">Technical skills</h2><div className="mt-7 space-y-4">{skillGroups.map(([title, content]) => <div key={title}><h3 className="font-display font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-stone-600">{content}</p></div>)}</div></div><div><h2 className="eyebrow">Education</h2><div className="mt-7"><h3 className="font-display text-xl font-semibold">{education[0].degree}</h3><p className="mt-2 text-stone-600">{education[0].school}</p><p className="mt-2 text-sm text-blue-700">{education[0].period} · {education[0].detail}</p></div><h2 className="eyebrow mt-10">Professional development</h2><div className="mt-6"><h3 className="font-display font-semibold">M-Labs Summer Program 2024</h3><p className="mt-2 text-sm text-stone-600">Mindstorm Studios · Certificate of Participation</p></div></div></section>
      <section className="flex flex-wrap items-center justify-between gap-4 border-t border-black/20 pt-8"><p className="text-sm text-stone-500">{profile.availability}.</p><Link href="/contact?type=employment" className="button button-primary">Discuss a role <ArrowRight size={15} /></Link></section>
    </article>
  </main>;
}
