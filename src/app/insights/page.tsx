import type { Metadata } from "next";
import InsightCard from "../components/InsightCard";
import { insights } from "../data/content";

export const metadata: Metadata = { title: "Journal", description: "Practical Android engineering notes on location systems, subscription state, crashes, and ANRs.", alternates: { canonical: "/insights" } };

export default function InsightsPage() { return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}><header className="container-wide grid gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">Journal / 06</p><h1 className="display-lg mt-7 max-w-[11ch]">Engineering decisions, without the confidential parts.</h1></div><p className="body-xl">Practical guidance shaped by production experience across location, billing, reliability, media, Firebase, and inherited codebases.</p></header><section className="border-section"><div className="container-wide grid gap-12 py-12 md:py-20 lg:grid-cols-3">{insights.map((insight) => <InsightCard key={insight.slug} insight={insight} />)}</div></section></main>; }
