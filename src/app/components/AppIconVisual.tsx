import Image from "next/image";
import { Bot, CreditCard, MapPinned, Mic2, ShieldCheck, Smartphone, Sparkles, Wrench } from "lucide-react";
import type { ProjectMedia } from "../data/content";

const glyphFor = (slug: string, title: string, size: number, accent: string) => {
  const props = { "aria-label": `${title} project symbol`, size: Math.round(size * .42), strokeWidth: 1.5, style: { color: accent } };
  if (slug.includes("billing")) return <CreditCard {...props} />;
  if (slug.includes("production")) return <Wrench {...props} />;
  if (slug.includes("chatbot")) return <Bot {...props} />;
  if (slug.includes("crypto") || slug.includes("blocker")) return <ShieldCheck {...props} />;
  if (slug.includes("route") || slug.includes("gps")) return <MapPinned {...props} />;
  if (slug.includes("voice")) return <Mic2 {...props} />;
  if (slug.includes("identifier")) return <Sparkles {...props} />;
  return <Smartphone {...props} />;
};

export default function AppIconVisual({ icon, slug, title, size = 88, accent = "#2446ff" }: { icon?: ProjectMedia; slug: string; title: string; size?: number; accent?: string }) {
  return <div className="app-icon grid shrink-0 place-items-center" style={{ width: size, height: size, background: icon ? "white" : `color-mix(in srgb, ${accent} 14%, white)` }}>
    {icon ? <Image src={icon.src} alt={icon.alt} fill sizes={`${size}px`} className="object-cover" /> : glyphFor(slug, title, size, accent)}
  </div>;
}
