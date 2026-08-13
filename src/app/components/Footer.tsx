import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";

const links = [["Work", "/projects"], ["Skills", "/skills"], ["AI Workflow", "/ai-workflow"], ["Profile", "/about"], ["Experience", "/experience"], ["Services", "/work-with-me"], ["Process", "/process"], ["Journal", "/insights"], ["Privacy", "/privacy"]];

export default function Footer() {
  return <footer className="editorial-panel">
    <div className="container-wide py-14 md:py-20">
      <div className="grid gap-12 border-b border-white/20 pb-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div><p className="eyebrow">Open to the right problems</p><h2 className="display-md mt-6 max-w-4xl">Employment, product work, and collaborations with real engineering depth.</h2></div>
        <div className="lg:text-right"><Link href="/contact" className="button button-secondary">Choose an inquiry <ArrowUpRight size={15} /></Link><a href={`mailto:${profile.email}`} className="mt-5 block break-all text-sm text-stone-300 hover:text-white">{profile.email}</a></div>
      </div>
      <div className="grid gap-8 pt-8 md:grid-cols-[1fr_2fr] md:items-end"><p className="font-mono text-[.62rem] uppercase leading-relaxed tracking-[.1em] text-stone-400">© {new Date().getFullYear()} Muhammad Shahroze<br />Remote US / Europe · Hybrid Islamabad · Collaborations</p><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">{links.map(([label, href]) => <Link key={href} href={href} className="font-mono text-[.62rem] uppercase tracking-[.09em] text-stone-300 hover:text-white">{label}</Link>)}</nav></div>
    </div>
  </footer>;
}
