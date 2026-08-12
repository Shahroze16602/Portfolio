import type { Metadata } from "next";
import ProjectsExplorer from "../components/ProjectsExplorer";
import StructuredData from "../components/StructuredData";
import { projects } from "../data/content";

export const metadata: Metadata = { title: "Android Work", description: "Android products, production maintenance, and earlier projects by Muhammad Shahroze.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Android work by Muhammad Shahroze", mainEntity: projects.filter((project) => project.slug !== "android-billing-platform").map((project) => ({ "@type": "CreativeWork", name: project.title, url: `/projects/${project.slug}` })) };
  return <main id="main-content" className="page-shell pt-[4.75rem]" tabIndex={-1}><StructuredData data={schema} /><header className="container-wide grid gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="eyebrow">Work / 2023—2026</p><h1 className="display-lg mt-7 max-w-[12ch]">Systems, products, and production problems solved.</h1></div><div><p className="body-xl">Apps engineered from scratch, inherited products improved in production, and earlier work.</p><p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-500">Public apps remain ordered by their verified Google Play install bands, without visual ranking numbers.</p></div></header><section className="border-section pb-20 pt-8"><div className="container-wide"><ProjectsExplorer /></div></section></main>;
}
