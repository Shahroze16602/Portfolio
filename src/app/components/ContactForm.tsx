"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { BriefcaseBusiness, Handshake, Loader2, Send, Sparkles } from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const types = [
  { value: "employment", label: "Employment", icon: BriefcaseBusiness, copy: "Remote or hybrid role" },
  { value: "freelance", label: "Freelance", icon: Sparkles, copy: "Build, rescue, monetize" },
  { value: "collaboration", label: "Collaboration", icon: Handshake, copy: "Technical or product work" },
];

export default function ContactForm({ initialType }: { initialType: string }) {
  const router = useRouter();
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const widgetHost = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

  const renderWidget = useCallback(() => {
    if (!window.turnstile || !widgetHost.current || widgetId.current) return;
    widgetId.current = window.turnstile.render(widgetHost.current, { sitekey: siteKey, theme: "light", size: "flexible", action: "contact", callback: (value: string) => setToken(value), "expired-callback": () => setToken(""), "error-callback": () => { setToken(""); setError("Verification could not load. Please refresh it or email me directly."); } });
  }, [siteKey]);
  useEffect(() => { renderWidget(); }, [renderWidget]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending"); setError(""); track("contact_form_start", { inquiry_type: type });
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(form.entries());
    body.type = type; body.turnstileToken = token;
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The message could not be sent.");
      track("contact_form_submit_success", { inquiry_type: type });
      router.push("/thanks");
    } catch (reason) {
      track("contact_form_submit_error", { inquiry_type: type });
      setStatus("error"); setError(reason instanceof Error ? reason.message : "The message could not be sent.");
      setToken(""); window.turnstile?.reset(widgetId.current);
    }
  }

  return <div className="glass-panel p-5 md:p-8"><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={renderWidget} /><div role="group" aria-label="Inquiry type" className="grid gap-2 sm:grid-cols-3">{types.map(({ value, label, icon: Icon, copy }) => <button key={value} type="button" aria-pressed={type === value} onClick={() => setType(value)} className={`rounded-2xl border p-4 text-left transition ${type === value ? "border-lime/50 bg-lime/8" : "border-white/10 bg-white/[.02] hover:border-white/25"}`}><Icon size={18} className={type === value ? "text-lime" : "text-zinc-500"} /><strong className="mt-5 block font-display text-lg">{label}</strong><span className="mt-1 block text-xs text-zinc-500">{copy}</span></button>)}</div><form onSubmit={submit} className="mt-8 grid gap-5 md:grid-cols-2"><input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" /><input type="hidden" name="type" value={type} /><label><span className="field-label">Name *</span><input className="field" name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" /></label><label><span className="field-label">Email *</span><input className="field" name="email" type="email" required maxLength={160} autoComplete="email" placeholder="you@company.com" /></label><label><span className="field-label">Company / team</span><input className="field" name="company" maxLength={120} autoComplete="organization" placeholder="Optional" /></label><label><span className="field-label">Role or project link</span><input className="field" name="projectUrl" type="url" maxLength={300} placeholder="https://" /></label><label><span className="field-label">Timeline</span><select className="field" name="timeline" defaultValue=""><option value="">Select if relevant</option><option>As soon as practical</option><option>Within 1 month</option><option>1–3 months</option><option>Exploring / flexible</option></select></label><label><span className="field-label">Budget range</span><select className="field" name="budget" defaultValue=""><option value="">Optional for freelance</option><option>Under $1,000</option><option>$1,000–$3,000</option><option>$3,000–$8,000</option><option>$8,000+</option><option>Prefer to discuss</option></select></label><label className="md:col-span-2"><span className="field-label">Useful context *</span><textarea className="field" name="message" required minLength={20} maxLength={3000} placeholder="What are you hiring for or building? What state is the Android product in, and what outcome matters?" /><span className="field-help">Please do not include passwords, access tokens, source code, or sensitive user data.</span></label><div className="md:col-span-2" ref={widgetHost} aria-label="Spam protection" />{error && <p role="alert" className="md:col-span-2 rounded-xl border border-red-400/25 bg-red-400/5 p-4 text-sm text-red-200">{error} You can also email me directly.</p>}<div className="md:col-span-2 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-md text-xs leading-relaxed text-zinc-600">By submitting, you agree to the processing described in the privacy notice. No message content is sent to analytics.</p><button className="button button-primary" type="submit" disabled={status === "sending" || !token}>{status === "sending" ? <><Loader2 size={15} className="animate-spin" /> Sending</> : <>Send inquiry <Send size={15} /></>}</button></div></form></div>;
}
