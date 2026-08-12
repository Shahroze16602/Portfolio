import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SectionIntro({ eyebrow, title, copy, href, action }: { eyebrow: string; title: string; copy?: string; href?: string; action?: string }) {
  return <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1fr_.55fr] md:items-end"><div><p className="eyebrow">{eyebrow}</p><h2 className="display-md mt-5 max-w-4xl">{title}</h2></div><div>{copy && <p className="body-lg">{copy}</p>}{href && action && <Link href={href} className="button button-quiet mt-5">{action}<ArrowUpRight size={16} /></Link>}</div></div>;
}
