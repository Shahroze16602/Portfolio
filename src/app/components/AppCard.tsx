import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { AppPortfolioRecord } from "../data/content";
import AppIconVisual from "./AppIconVisual";

export default function AppCard({ app }: { app: AppPortfolioRecord }) {
  return <article className="flex h-full flex-col border-t border-black/25 py-6">
    <div className="flex items-start gap-5">
      <AppIconVisual icon={app.icon} slug={app.slug} title={app.title} size={84} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[.58rem] uppercase tracking-[.1em] text-stone-500">{app.workType === "from-scratch" ? "Built from scratch" : "Production improvement"}</p>
          <p className="font-mono text-[.62rem] font-semibold uppercase tracking-[.08em] text-blue-700">{app.signal.replace(" on Google Play", "")}</p>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-.045em]">{app.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{app.summary}</p>
      </div>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">{app.details.map((detail) => <span key={detail} className="tag">{detail}</span>)}</div>
    <div className="mt-auto flex flex-wrap gap-4 pt-6">
      <Link href={app.detailUrl} className="button button-quiet">Details <ArrowUpRight size={14} /></Link>
      <a href={app.playUrl} target="_blank" rel="noreferrer" className="button button-quiet" aria-label={`${app.title} on Google Play`}>Google Play <ExternalLink size={13} /></a>
    </div>
  </article>;
}
