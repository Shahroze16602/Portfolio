import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, ExternalLink, LockKeyhole, ShieldCheck } from "lucide-react";
import BillingDiagram from "../../components/BillingDiagram";
import AppIconVisual from "../../components/AppIconVisual";
import ProjectCard from "../../components/ProjectCard";
import StructuredData from "../../components/StructuredData";
import { getProject, projects } from "../../data/content";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, alternates: { canonical: `/projects/${slug}` }, robots: slug === "android-billing-platform" ? { index: false, follow: false } : undefined, openGraph: { title: `${project.title} — Android case study`, description: project.summary, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const icon = project.media.find((item) => item.kind === "icon");
  const related = (project.related || []).map(getProject).filter((item) => Boolean(item) && item?.slug !== "android-billing-platform").slice(0, 3) as typeof projects;
  const isDeep = project.depth === "flagship" || project.depth === "specialized";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadshahroze.dev";
  const schema = [
    { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.summary, creator: { "@type": "Person", name: "Muhammad Shahroze" }, url: `${baseUrl}/projects/${slug}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Work", item: `${baseUrl}/projects` }, { "@type": "ListItem", position: 2, name: project.title, item: `${baseUrl}/projects/${slug}` }] },
  ];
  return <main id="main-content" className="page-shell pt-28" tabIndex={-1}>
    {project.slug !== "android-billing-platform" && <StructuredData data={schema} />}
    <article>
      <header className="section-tight relative overflow-hidden"><div aria-hidden className="site-grid absolute inset-0 opacity-60" /><div className="absolute right-0 top-0 size-[34rem] rounded-full opacity-15 blur-[130px]" style={{ background: project.accent }} /><div className="container relative"><div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end"><div><div className="mb-7"><AppIconVisual icon={icon} slug={project.slug} title={project.title} size={96} accent={project.accent} /></div><div className="flex flex-wrap gap-2"><span className="tag tag-accent">{project.category}</span><span className="tag">{project.workType.replace("-", " ")}</span></div><h1 className="display-lg mt-6 max-w-5xl">{project.title}</h1><p className="body-xl mt-7 max-w-3xl">{project.summary}</p></div><div className="tech-panel p-6"><dl className="space-y-5 text-sm"><div><dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-zinc-600">Period</dt><dd className="mt-1 text-zinc-200">{project.period}</dd></div>{project.publicSignal && <div><dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-zinc-600">Public product signal</dt><dd className="mt-1 text-blue-700">{project.publicSignal}</dd></div>}<div><dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-zinc-600">Verification</dt><dd className="mt-1 text-zinc-400">{project.verifiedAt || "Portfolio record"}</dd></div></dl><div className="mt-6 flex flex-wrap gap-3">{project.playUrl && <a href={project.playUrl} target="_blank" rel="noreferrer" className="button button-primary">Google Play <ExternalLink size={14} /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button button-secondary"><Code2 size={14} /> GitHub</a>}</div></div></div></div></header>

      {project.slug === "android-billing-platform" && <section className="border-section bg-[#080b13] py-12"><div className="container"><BillingDiagram /></div></section>}

      <section className="section"><div className="container grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><aside><p className="eyebrow">Ownership</p><p className="mt-6 text-xl leading-relaxed text-white">{project.ownership}</p><p className="mt-5 leading-relaxed text-zinc-500">{project.teamBoundary}</p>{project.confidentiality && <div className="mt-8 rounded-2xl border border-violet/25 bg-violet/5 p-5"><p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-violet-200"><LockKeyhole size={15} /> Confidentiality boundary</p><ul className="mt-4 space-y-2 text-sm text-zinc-400">{project.confidentiality.map((item) => <li key={item}>— {item}</li>)}</ul></div>}</aside><div><p className="eyebrow">Context</p><h2 className="display-md mt-6">The product system behind the interface.</h2><p className="body-xl mt-7">{project.overview}</p><div className="mt-9 flex flex-wrap gap-2">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></div></section>

      <section className="section border-section bg-[#080b13]"><div className="container"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Product surface</p><h2 className="display-md mt-6">What the app needed to make dependable.</h2></div><div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2">{project.capabilities.map((item, index) => <div key={item} className="bg-[#0b101a] p-6"><span className="font-mono text-[0.62rem] text-blue-700">0{index + 1}</span><p className="mt-7 text-lg text-zinc-200">{item}</p></div>)}</div></div></div></section>

      {isDeep && project.constraints && project.decisions && <>
        <section className="section"><div className="container"><div className="grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Constraints</p><h2 className="display-md mt-6">The conditions that shape good decisions.</h2><ul className="mt-8 space-y-3">{project.constraints.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.02] p-4 text-zinc-300"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan" />{item}</li>)}</ul></div><div><p className="eyebrow">Hardest engineering problem</p><div className="glass-panel mt-6 p-7 md:p-10"><p className="font-display text-2xl font-semibold leading-snug tracking-[-0.03em]">{project.hardestProblem}</p><div className="mt-8 h-px bg-gradient-to-r from-lime via-cyan to-violet" /><p className="mt-7 text-sm leading-relaxed text-zinc-500">This public explanation stays at the product and architecture level. Employer-owned code and confidential metrics are not reproduced.</p></div></div></div></div></section>
        <section className="section border-section bg-[#080b13]"><div className="container"><p className="eyebrow">Architecture decisions</p><h2 className="display-md mt-6 max-w-4xl">Clarity at the boundaries keeps the product recoverable.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{project.decisions.map((decision, index) => <article key={decision.title} className="tech-panel p-6"><span className="font-mono text-xs text-blue-700">0{index + 1}</span><h3 className="mt-10 font-display text-xl font-semibold">{decision.title}</h3><p className="mt-4 text-sm leading-relaxed text-zinc-400">{decision.detail}</p></article>)}</div></div></section>
        {project.quality && <section className="section"><div className="container grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><p className="eyebrow">Quality and delivery</p><h2 className="display-md mt-6">Production behavior is part of the feature.</h2></div><div className="space-y-3">{project.quality.map((item) => <div key={item} className="flex items-center gap-4 border-b border-white/10 py-4 text-lg text-zinc-300"><CheckCircle2 size={19} className="text-lime" />{item}</div>)}</div></div></section>}
      </>}

      <section className="section border-section bg-[#080b13]"><div className="container grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Results</p><div className="mt-8 grid gap-3">{project.results.map((item) => <div key={item} className="tech-panel p-5 text-zinc-200">{item}</div>)}</div></div>{project.lessons && <div><p className="eyebrow">Reflection</p><div className="mt-8 space-y-5">{project.lessons.map((item) => <blockquote key={item} className="border-l border-lime/50 pl-5 font-display text-xl leading-relaxed text-zinc-300">{item}</blockquote>)}</div></div>}</div></section>

      {related.length > 0 && <section className="section"><div className="container-wide"><div className="mb-9 flex items-end justify-between"><div><p className="eyebrow">Continue exploring</p><h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em]">Related systems</h2></div><Link href="/projects" className="button button-quiet">All work <ArrowRight size={15} /></Link></div><div className={`grid items-stretch gap-4 ${related.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></div></section>}

      <section className="section border-section"><div className="container"><div className="glass-panel p-7 text-center md:p-12"><p className="eyebrow">A relevant problem?</p><h2 className="display-md mx-auto mt-6 max-w-3xl">Let&apos;s discuss the Android system behind it.</h2><Link href="/contact" className="button button-primary mt-8">Start a conversation <ArrowUpRight size={15} /></Link></div></div></section>
    </article>
  </main>;
}
