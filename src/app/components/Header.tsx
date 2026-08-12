"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark";

const navigation = [
  ["Home", "/"],
  ["Work", "/projects"],
  ["Skills", "/skills"],
  ["AI", "/ai-workflow"],
  ["Profile", "/about"],
  ["Services", "/work-with-me"],
  ["Journal", "/insights"],
  ["Résumé", "/resume"],
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#f1efe8]/92 backdrop-blur-xl">
    <div className="container-wide flex h-[4.75rem] items-center justify-between">
      <Link href="/" className="group flex items-center gap-3" aria-label="Muhammad Shahroze, home">
        <BrandMark />
        <span className="hidden font-display text-sm font-bold tracking-[-.03em] sm:block">Muhammad Shahroze</span>
      </Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-4 xl:flex">
        {navigation.map(([label, href]) => { const active = pathname === href || pathname.startsWith(`${href}/`); return <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`border-b py-2 font-mono text-[.62rem] uppercase tracking-[.1em] transition-colors ${active ? "border-blue-600 text-blue-700" : "border-transparent text-stone-600 hover:border-black hover:text-black"}`}>{label}</Link>; })}
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/contact" className="button button-primary hidden min-h-10 px-4 sm:inline-flex">Start a conversation <ArrowUpRight size={14} /></Link>
        <button type="button" className="grid size-10 place-items-center border border-black/25 xl:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="border-t border-black/15 bg-[#f1efe8] px-4 py-2 xl:hidden">{[...navigation, ["Contact", "/contact"] as const].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/15 px-1 py-4 font-display text-2xl font-semibold"><span>{label}</span><ArrowUpRight size={18} /></Link>)}</motion.nav>}</AnimatePresence>
  </header>;
}
