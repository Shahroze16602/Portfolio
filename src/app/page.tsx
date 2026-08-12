import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroVisual from "./components/HeroVisual";
import InsightCard from "./components/InsightCard";
import MotionReveal from "./components/MotionReveal";
import AppCard from "./components/AppCard";
import StructuredData from "./components/StructuredData";
import { featuredApps, insights, profile, proofMetrics } from "./data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadshahroze.dev";

export default function Home() {
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.title, url: siteUrl, email: `mailto:${profile.email}`, sameAs: [profile.linkedin, profile.github], knowsAbout: ["Android development", "Kotlin", "Jetpack Compose", "Google Play Billing", "Firebase"] };
  return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}>
    <StructuredData data={personSchema} />
    <section id="top" className="w-full">
      <HeroVisual>
        <div className="container-wide flex min-h-[39rem] flex-col justify-center pb-20 pt-14 md:min-h-[44rem] md:pb-24 lg:min-h-[calc(100vh-4.75rem)] lg:max-h-[56rem]">
          <MotionReveal><p className="eyebrow">Muhammad Shahroze · Android Engineer</p><h1 className="hero-title mt-6 max-w-[10ch]">I build Android products for the <span>real world.</span></h1></MotionReveal>
          <MotionReveal delay={.1} className="mt-7 max-w-2xl"><p className="hero-copy">{profile.experience} building Kotlin and Jetpack Compose products—from maps, media, and AI workflows to billing, Firebase, reliability, and production growth.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/projects" className="button button-primary">Explore work <ArrowRight size={15} /></Link><a href="/Muhammad-Shahroze-Android-Engineer.pdf" download className="button button-secondary">Download résumé <ArrowUpRight size={15} /></a></div><p className="hero-availability mt-7 max-w-xl">{profile.availability}</p></MotionReveal>
        </div>
      </HeroVisual>
    </section>

    <section className="container-wide grid border-x border-black/15 sm:grid-cols-2">{proofMetrics.map((metric) => <div key={metric.value} className="border-b border-r border-black/15 p-5 md:p-7"><p className="font-display text-5xl font-semibold tracking-[-.07em]">{metric.value}</p><p className="mt-3 text-sm font-semibold">{metric.label}</p><p className="mt-1 text-xs leading-relaxed text-stone-500">{metric.note}</p></div>)}</section>

    <section className="section"><div className="container-wide"><div className="mb-7"><p className="eyebrow">Featured apps</p><h2 className="display-md mt-5">Selected Android products.</h2></div><p className="mb-7 max-w-2xl text-sm leading-relaxed text-stone-500">A selection of apps I built from scratch and products I improved in production. Public install bands show the scale of each product on Google Play.</p><div className="grid gap-x-8 md:grid-cols-2">{featuredApps.map((app) => <AppCard key={`${app.workType}-${app.slug}`} app={app} />)}</div><Link href="/projects" className="button button-secondary mt-9">View all apps <ArrowUpRight size={14} /></Link></div></section>

    <section className="editorial-panel"><div className="container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="eyebrow">A production-minded practice</p><h2 className="display-md mt-6">New builds and inherited systems.</h2></div><div><p className="body-xl">The portfolio separates from-scratch product ownership from focused production improvements—so the contribution is easy to understand.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/experience" className="button button-secondary">Experience <ArrowUpRight size={14} /></Link><Link href="/skills" className="button button-secondary">Skills <ArrowUpRight size={14} /></Link><Link href="/ai-workflow" className="button button-secondary">AI workflow <ArrowUpRight size={14} /></Link></div></div></div></section>

    <section className="section"><div className="container-wide"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="eyebrow">Field notes</p><h2 className="display-md mt-5">Practical thinking from shipped Android work.</h2></div><Link href="/insights" className="button button-quiet hidden sm:inline-flex">All writing <ArrowUpRight size={14} /></Link></div><div className="grid gap-10 lg:grid-cols-3">{insights.map((insight) => <InsightCard key={insight.slug} insight={insight} />)}</div></div></section>
  </main>;
}
