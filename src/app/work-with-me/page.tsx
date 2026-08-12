import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/content";

export const metadata: Metadata = { title: "Services", description: "Android development services for new products, inherited codebases, billing, subscriptions, and monetization.", alternates: { canonical: "/work-with-me" } };

export default function WorkWithMePage() {
  return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}>
    <header className="container-wide grid gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">Services / 05</p><h1 className="display-lg mt-7 max-w-[11ch]">Build the product. Rescue the codebase. Fix the revenue layer.</h1></div><div><p className="body-xl">Focused native Android work for founders and product teams who need implementation ownership with production awareness.</p><Link href="/contact?type=freelance" className="button button-primary mt-7">Discuss a project <ArrowUpRight size={14} /></Link></div></header>
    <section className="editorial-panel"><div className="container-wide py-10 md:py-16">{services.map((service, index) => <article key={service.slug} className="grid gap-6 border-t border-white/25 py-9 lg:grid-cols-[3rem_.65fr_1.35fr]"><span className="font-mono text-[.6rem] text-stone-400">0{index + 1}</span><div><h2 className="font-display text-5xl font-semibold tracking-[-.06em]">{service.title}</h2><p className="mt-4 leading-relaxed text-stone-300">{service.summary}</p></div><ul className="grid gap-3 sm:grid-cols-2">{service.includes.map((item) => <li key={item} className="border-t border-white/20 pt-3 text-sm text-stone-300">{item}</li>)}</ul></article>)}</div></section>
    <section className="section"><div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Before we start</p><h2 className="display-md mt-5">Clear scope. Clear ownership.</h2></div><div className="grid gap-0"><Link href="/services/engagements" className="index-link"><span className="index-number">01</span><strong className="font-display text-2xl">Fit, deliverables, and boundaries</strong><ArrowUpRight size={17} /></Link><Link href="/services/faq" className="index-link"><span className="index-number">02</span><strong className="font-display text-2xl">Frequently asked questions</strong><ArrowUpRight size={17} /></Link><Link href="/contact?type=freelance" className="index-link"><span className="index-number">03</span><strong className="font-display text-2xl">Start a freelance inquiry</strong><ArrowUpRight size={17} /></Link></div></div></section>
  </main>;
}
