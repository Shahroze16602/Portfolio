import type { Metadata } from "next";
import { BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { profile } from "../data/content";

export const metadata: Metadata = { title: "Contact", description: "Contact Muhammad Shahroze about Android employment, freelance projects, or technical collaboration.", alternates: { canonical: "/contact" } };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const params = await searchParams;
  const initialType = ["employment", "freelance", "collaboration"].includes(params.type || "") ? params.type! : "employment";
  return <main id="main-content" className="page-shell pt-28" tabIndex={-1}>
    <section className="section-tight relative overflow-hidden"><div aria-hidden className="site-grid absolute inset-0 opacity-60" /><div className="container relative"><p className="eyebrow">Contact / choose the conversation</p><h1 className="display-lg mt-7 max-w-5xl">Tell me what the Android product needs next.</h1><p className="body-xl mt-8 max-w-3xl">Employment, focused freelance work, and thoughtful collaborations are all welcome. Share the useful context; I&apos;ll respond within two business days.</p></div></section>
    <section className="section border-section"><div className="container grid gap-8 lg:grid-cols-[1.15fr_.55fr]"><ContactForm initialType={initialType} /><aside className="space-y-4"><div className="tech-panel p-6"><p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-600">Direct alternatives</p><div className="mt-6 space-y-3"><a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-zinc-300 hover:border-lime/30"><Mail size={17} className="text-lime" /><span className="min-w-0 break-all">{profile.email}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-zinc-300 hover:border-cyan/30"><BriefcaseBusiness size={17} className="text-cyan" />LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 p-4 text-sm text-zinc-300 hover:border-violet/30"><Code2 size={17} className="text-violet" />GitHub</a></div></div><div className="tech-panel p-6"><p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cyan"><MapPin size={15} /> Availability</p><p className="mt-5 leading-relaxed text-zinc-300">{profile.location}</p><p className="mt-3 text-sm leading-relaxed text-zinc-500">{profile.availability}</p></div><p className="px-2 text-xs leading-relaxed text-zinc-600">This site does not publish a phone number. Please use the form or direct professional links.</p></aside></div></section>
  </main>;
}
