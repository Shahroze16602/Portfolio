"use client";

import { useMemo, useState } from "react";
import { appPortfolio, featuredApps, projects, type WorkType } from "../data/content";
import AppCard from "./AppCard";
import ProjectCard from "./ProjectCard";

const filters: Array<{ label: string; value: "featured" | WorkType | "all" }> = [
  { label: "All apps", value: "all" },
  { label: "Featured", value: "featured" },
  { label: "From scratch", value: "from-scratch" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Platform", value: "platform" },
  { label: "Earlier", value: "earlier" },
];

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const visibleApps = useMemo(() => {
    if (filter === "featured") return featuredApps;
    if (filter === "from-scratch" || filter === "maintenance") return appPortfolio.filter((app) => app.workType === filter);
    if (filter === "all") return appPortfolio;
    return [];
  }, [filter]);
  const visibleStories = useMemo(() => filter === "platform" || filter === "earlier" ? projects.filter((project) => project.workType === filter) : [], [filter]);

  return <div>
    <div className="mb-10 flex flex-wrap gap-x-5 gap-y-2 border-y border-black/20 py-4" role="group" aria-label="Filter work">
      {filters.map((item) => <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)} className={`font-mono text-[.62rem] uppercase tracking-[.08em] ${filter === item.value ? "text-blue-700 underline underline-offset-8" : "text-stone-500 hover:text-black"}`}>{item.label}</button>)}
    </div>

    {visibleApps.length > 0 && <section aria-labelledby="apps-heading">
      <div className="mb-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow">{filter === "featured" ? "Highest public install bands" : "Android apps"}</p><h2 id="apps-heading" className="mt-5 font-display text-3xl font-semibold tracking-[-.045em]">Icons, contribution, and product evidence.</h2></div><p className="max-w-md text-sm leading-relaxed text-stone-500">Ordered by verified public Google Play install band. Install counts describe the products, not growth attributed solely to my work.</p></div>
      <div className="grid gap-x-8 md:grid-cols-2">{visibleApps.map((app) => <AppCard key={`${app.workType}-${app.slug}`} app={app} />)}</div>
    </section>}

    {visibleStories.length > 0 && <section aria-labelledby="stories-heading"><div className="mb-7"><p className="eyebrow">Project stories</p><h2 id="stories-heading" className="mt-5 font-display text-3xl font-semibold tracking-[-.045em]">Systems without public app listings.</h2></div><div className="grid gap-x-8 md:grid-cols-2">{visibleStories.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>}
  </div>;
}
