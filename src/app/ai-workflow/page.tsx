import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, CheckCircle2, ImageIcon, SearchCode, Sparkles } from "lucide-react";
import { aiWorkflow } from "../data/content";

export const metadata: Metadata = { title: "AI Workflow", description: "How Muhammad Shahroze uses Claude, Codex, ChatGPT, and Antigravity in a reviewed engineering workflow.", alternates: { canonical: "/ai-workflow" } };

const icons = [Sparkles, SearchCode, ImageIcon, Bot];
const boundaries = ["I define the product and engineering intent.", "I review generated plans, code, and assets before use.", "I test behavior, edge cases, and production readiness.", "I remain accountable for privacy, policy, quality, and the shipped result."];

export default function AiWorkflowPage() {
  return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}>
    <header className="container-wide grid gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">AI workflow / 04</p><h1 className="display-lg mt-7 max-w-[11ch]">AI accelerates the work. Ownership stays human.</h1></div><p className="body-xl">I use a small set of AI tools for planning, development, debugging, and visual asset exploration. They support the workflow; they do not replace engineering judgment, review, or testing.</p></header>
    <section className="editorial-panel"><div className="container-wide grid md:grid-cols-2">{aiWorkflow.map((item, index) => { const Icon = icons[index]; return <article key={item.tool} className="border-b border-r border-white/20 p-7 md:p-10"><div className="flex items-center justify-between"><Icon size={25} aria-hidden /><span className="font-mono text-[.62rem] text-stone-400">{String(index + 1).padStart(2, "0")}</span></div><h2 className="mt-12 font-display text-4xl font-semibold tracking-[-.05em]">{item.tool}</h2><p className="mt-4 max-w-xl leading-relaxed text-stone-300">{item.role}</p></article>; })}</div></section>
    <section className="section"><div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Working boundary</p><h2 className="display-md mt-6">Assistance without outsourced accountability.</h2></div><div>{boundaries.map((boundary, index) => <div key={boundary} className="flex gap-4 border-t border-black/20 py-5"><CheckCircle2 size={19} className="mt-0.5 shrink-0 text-blue-700" /><div><span className="index-number">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-lg">{boundary}</p></div></div>)}<div className="mt-8 flex flex-wrap gap-3"><Link href="/process" className="button button-primary">Engineering process <ArrowUpRight size={14} /></Link><Link href="/skills" className="button button-secondary">All skills <ArrowUpRight size={14} /></Link></div></div></div></section>
  </main>;
}
