import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { skillGroups } from "../data/content";

export const metadata: Metadata = { title: "Skills", description: "Android engineering, architecture, platform, monetization, reliability, AI-assisted engineering, and supporting web skills used by Muhammad Shahroze.", alternates: { canonical: "/skills" } };

export default function SkillsPage() {
  return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}>
    <header className="container-wide grid gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">Skills / 03</p><h1 className="display-lg mt-7 max-w-[10ch]">Android depth, organized for delivery.</h1></div><div><p className="body-xl">A practical inventory of technologies and engineering areas I have worked with across shipped products, inherited codebases, billing systems, and earlier full-stack work.</p><p className="mt-5 text-sm leading-relaxed text-stone-500">This is an experience map—not a claim of equal depth in every tool. Kotlin, Jetpack Compose, Clean Architecture, MVVM, Room, Ktor, Koin, and Firebase are my primary working stack.</p></div></header>
    <section className="border-section"><div className="container-wide grid gap-x-10 md:grid-cols-2">{skillGroups.map((group, index) => <article key={group.title} className="border-b border-black/20 py-9"><div className="grid grid-cols-[3rem_1fr] gap-4"><span className="index-number">{String(index + 1).padStart(2, "0")}</span><div><h2 className="font-display text-3xl font-semibold tracking-[-.045em]">{group.title}</h2><p className="mt-3 text-sm leading-relaxed text-stone-600">{group.description}</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{group.skills.map((skill) => <li key={skill} className="flex items-center gap-2 text-sm"><CheckCircle2 size={15} className="shrink-0 text-blue-700" />{skill}</li>)}</ul></div></div></article>)}</div></section>
    <section className="editorial-panel"><div className="container-wide flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-end md:py-20"><div><p className="eyebrow">Evidence over keywords</p><h2 className="display-md mt-6 max-w-4xl">See these skills inside shipped product stories.</h2></div><div className="flex flex-wrap gap-3"><Link href="/projects" className="button button-secondary">Browse work <ArrowUpRight size={14} /></Link><Link href="/ai-workflow" className="button button-secondary">AI workflow <ArrowUpRight size={14} /></Link></div></div></section>
  </main>;
}
