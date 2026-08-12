import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";
import AppIconVisual from "./AppIconVisual";

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const icon = project.media.find((item) => item.kind === "icon");
  return <article className={`group h-full border-t border-black/25 py-6 ${large ? "md:col-span-1" : ""}`}>
    <Link href={`/projects/${project.slug}`} className="flex h-full flex-col">
      <div className="flex flex-1 items-start gap-5">
        <AppIconVisual icon={icon} slug={project.slug} title={project.title} size={84} accent={project.accent} />
        <div className="min-w-0 flex-1"><p className="font-mono text-[.58rem] uppercase tracking-[.1em] text-stone-500">{project.category} · {project.period}</p><h3 className="mt-3 font-display text-2xl font-semibold tracking-[-.045em] md:text-3xl">{project.shortTitle}</h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-600">{project.summary}</p></div>
        <span className="grid size-10 shrink-0 place-items-center border border-black/25 transition group-hover:bg-black group-hover:text-white"><ArrowUpRight size={16} /></span>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="tag">{item}</span>)}{project.publicSignal && <span className="ml-auto font-mono text-[.61rem] uppercase tracking-[.08em] text-blue-700">{project.publicSignal.split(" on ")[0]}</span>}</div>
    </Link>
  </article>;
}
