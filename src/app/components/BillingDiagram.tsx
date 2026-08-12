import { Activity, BadgeCheck, CloudCog, CreditCard, RefreshCcw, Smartphone } from "lucide-react";

const nodes = [
  { icon: Smartphone, title: "App", copy: "Small caller surface" },
  { icon: CreditCard, title: "Billing core", copy: "Provider-neutral state" },
  { icon: BadgeCheck, title: "Entitlements", copy: "Acknowledge + restore" },
  { icon: RefreshCcw, title: "Recovery", copy: "Errors + bounded retry" },
  { icon: Activity, title: "Analytics", copy: "Consistent funnel hooks" },
  { icon: CloudCog, title: "Remote config", copy: "Operational control" },
];

export default function BillingDiagram() {
  return <div className="relative grid gap-3 rounded-[1.6rem] border border-white/10 bg-[#080d16] p-4 sm:grid-cols-2 lg:grid-cols-3"><div aria-hidden className="absolute inset-0 site-grid opacity-30" />{nodes.map(({ icon: Icon, title, copy }, index) => <div key={title} className="relative rounded-2xl border border-white/10 bg-[#0d1421]/85 p-5"><div className="flex items-center justify-between"><Icon size={19} className={index === 1 ? "text-lime" : "text-cyan"} /><span className="font-mono text-[0.6rem] text-zinc-600">0{index + 1}</span></div><p className="mt-6 font-display text-lg font-semibold">{title}</p><p className="mt-1 text-sm text-zinc-500">{copy}</p></div>)}</div>;
}
