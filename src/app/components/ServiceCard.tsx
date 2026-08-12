import { ArrowDownRight, Bug, Rocket, WalletCards } from "lucide-react";
import type { services } from "../data/content";

const icons = { build: Rocket, rescue: Bug, monetize: WalletCards };

export default function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = icons[service.slug as keyof typeof icons];
  return <article className="tech-panel p-6 md:p-8"><div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[.035] text-lime"><Icon size={21} /></span><span className="font-mono text-xs text-zinc-600">{service.number}</span></div><h3 className="mt-10 font-display text-3xl font-semibold tracking-[-0.04em]">{service.title}</h3><p className="mt-4 min-h-20 leading-relaxed text-zinc-400">{service.summary}</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6">{service.includes.map((item) => <li key={item} className="flex gap-3 text-sm text-zinc-300"><ArrowDownRight size={15} className="mt-0.5 shrink-0 text-cyan" />{item}</li>)}</ul></article>;
}
