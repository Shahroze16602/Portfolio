"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroVisual({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return <motion.section initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }} className="hero-surface relative isolate min-h-[39rem] overflow-hidden bg-black md:min-h-[44rem] lg:min-h-[calc(100vh-4.75rem)] lg:max-h-[56rem]">
    <Image src="/visuals/android-systems-hero.png" alt="Abstract mobile systems artwork with connected layers representing maps, data, AI, commerce, and modular Android engineering" fill priority sizes="100vw" className="-z-20 object-cover object-[62%_50%] saturate-[.82] md:object-[58%_50%]" />
    <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,7,12,.94)_0%,rgba(4,7,12,.82)_44%,rgba(4,7,12,.3)_78%,rgba(4,7,12,.48)_100%)]" />
    <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(4,7,12,.92)_0%,transparent_45%,rgba(4,7,12,.2)_100%)]" />
    {children}
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-white/20 px-5 py-4 font-mono text-[.56rem] uppercase tracking-[.1em] text-white/65 md:px-10"><span>Android systems / production engineering</span><span className="hidden sm:block">Maps · data · AI · commerce · reliability</span></div>
  </motion.section>;
}
