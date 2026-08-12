import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return <main id="main-content" className="page-shell grid min-h-screen place-items-center overflow-hidden px-4 pt-24" tabIndex={-1}><div aria-hidden className="site-grid absolute inset-0 opacity-70" /><div className="relative text-center"><p className="font-display text-[clamp(8rem,30vw,22rem)] font-semibold leading-none tracking-[-0.09em] text-white/[.035]">404</p><div className="absolute inset-0 grid place-items-center"><div><span className="mx-auto grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-cyan"><Search size={23} /></span><h1 className="display-md mt-7">This route left the system.</h1><p className="body-lg mx-auto mt-5 max-w-xl">The page may have moved, but the work and contact routes are still online.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/projects" className="button button-primary"><ArrowLeft size={15} /> Browse work</Link><Link href="/contact" className="button button-secondary">Contact</Link></div></div></div></div></main>;
}
