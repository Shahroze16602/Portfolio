import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import ProjectCard from "../../components/ProjectCard";
import StructuredData from "../../components/StructuredData";
import { getInsight, getProject, insights, projects } from "../../data/content";

export function generateStaticParams() { return insights.map((insight) => ({ slug: insight.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.excerpt, alternates: { canonical: `/insights/${slug}` }, openGraph: { type: "article", title: insight.title, description: insight.excerpt, publishedTime: "2026-08-12", modifiedTime: "2026-08-12" } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const related = insight.relatedProjects.map(getProject).filter(Boolean) as typeof projects;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadshahroze.dev";
  const schema = [{ "@context": "https://schema.org", "@type": "TechArticle", headline: insight.title, description: insight.excerpt, datePublished: "2026-08-12", dateModified: "2026-08-12", author: { "@type": "Person", name: "Muhammad Shahroze" }, mainEntityOfPage: `${baseUrl}/insights/${slug}` }, { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Insights", item: `${baseUrl}/insights` }, { "@type": "ListItem", position: 2, name: insight.title, item: `${baseUrl}/insights/${slug}` }] }];
  return <main id="main-content" className="page-shell pt-28" tabIndex={-1}>
    <StructuredData data={schema} />
    <article>
      <header className="article-pattern section-tight border-b border-white/10" style={{ "--article-accent": insight.accent } as React.CSSProperties}><div className="container"><Link href="/insights" className="button button-quiet"><ArrowLeft size={15} /> All insights</Link><div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.1em]"><span style={{ color: insight.accent }}>{insight.category}</span><span className="text-zinc-600">•</span><span className="flex items-center gap-2 text-zinc-400"><Clock3 size={14} /> {insight.readingTime}</span></div><h1 className="display-lg mt-7 max-w-5xl">{insight.title}</h1><p className="body-xl mt-8 max-w-3xl">{insight.excerpt}</p><p className="mt-7 font-mono text-[0.63rem] uppercase tracking-[0.09em] text-zinc-600">Published {insight.published} · Updated {insight.updated}</p></div></header>
      <div className="container grid gap-12 py-16 lg:grid-cols-[.32fr_1fr] lg:py-24"><aside className="lg:sticky lg:top-28 lg:self-start"><p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-600">On this page</p><nav aria-label="Table of contents" className="mt-5 space-y-3">{insight.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block border-l border-white/10 pl-4 text-sm leading-relaxed text-zinc-500 hover:border-lime hover:text-white">{section.title}</a>)}</nav></aside><div className="prose">{insight.sections.map((section) => <section key={section.id} id={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div></div>
      {related.length > 0 && <section className="section border-section bg-[#080b13]"><div className="container"><div className="mb-9 flex items-end justify-between"><div><p className="eyebrow">Related product work</p><h2 className="mt-5 font-display text-3xl font-semibold">See the ideas in context.</h2></div><Link href="/projects" className="button button-quiet">All work <ArrowRight size={15} /></Link></div><div className="grid gap-4 md:grid-cols-2">{related.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>}
      <section className="section"><div className="container"><div className="glass-panel p-7 text-center md:p-12"><p className="eyebrow">Apply the thinking</p><h2 className="display-md mx-auto mt-6 max-w-3xl">Have an Android system that needs a clearer path?</h2><Link href="/contact" className="button button-primary mt-8">Start a conversation <ArrowRight size={16} /></Link></div></div></section>
    </article>
  </main>;
}
