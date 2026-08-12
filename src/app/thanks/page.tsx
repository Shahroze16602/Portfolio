import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title: "Message received", robots: { index: false, follow: true } };

export default function ThanksPage() {
  return <main id="main-content" className="page-shell grid min-h-screen place-items-center px-4 pt-24" tabIndex={-1}><div className="glass-panel max-w-2xl p-8 text-center md:p-14"><span className="mx-auto grid size-16 place-items-center rounded-full border border-lime/30 bg-lime/10 text-lime"><CheckCircle2 size={28} /></span><p className="eyebrow mt-8">Message received</p><h1 className="display-md mt-6">Thank you for the useful context.</h1><p className="body-lg mx-auto mt-6 max-w-xl">I&apos;ll review the inquiry and normally respond within two business days. In the meantime, the project archive shows the Android systems I&apos;ve worked across.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/projects" className="button button-primary">Explore work <ArrowRight size={16} /></Link><Link href="/" className="button button-secondary">Return home</Link></div></div></main>;
}
