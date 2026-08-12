import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "../data/content";

export default function InsightCard({ insight }: { insight: Insight }) {
  return <article className="group border-t border-black/25 pt-5"><Link href={`/insights/${insight.slug}`} className="block"><div className="flex justify-between gap-4 font-mono text-[.59rem] uppercase tracking-[.09em]"><span className="text-blue-700">{insight.category}</span><span className="text-stone-500">{insight.readingTime}</span></div><h3 className="mt-8 font-display text-2xl font-semibold leading-[1.02] tracking-[-.045em] md:text-3xl">{insight.title}</h3><p className="mt-4 line-clamp-3 leading-relaxed text-stone-600">{insight.excerpt}</p><span className="mt-7 inline-flex items-center gap-2 font-mono text-[.62rem] uppercase tracking-[.08em] text-blue-700">Read article <ArrowUpRight size={13} /></span></Link></article>;
}
