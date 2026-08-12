import { NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  type: z.enum(["employment", "freelance", "collaboration"]),
  company: z.string().trim().max(120).optional().default(""),
  projectUrl: z.union([z.string().trim().url().max(300), z.literal("")]).optional().default(""),
  timeline: z.string().trim().max(80).optional().default(""),
  budget: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(20).max(3000),
  website: z.string().max(200).optional().default(""),
  turnstileToken: z.string().min(1).max(2048),
});

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]!));

export async function POST(request: NextRequest) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const parsed = schema.safeParse(payload);
  if (!parsed.success) return Response.json({ error: "Please check the required fields and try again." }, { status: 400 });
  const data = parsed.data;
  if (data.website) return Response.json({ error: "Submission rejected." }, { status: 400 });

  const isDevelopment = process.env.NODE_ENV !== "production";
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || (isDevelopment ? "1x0000000000000000000000000000000AA" : "");
  if (!turnstileSecret) return Response.json({ error: "Contact verification is not configured. Please use direct email." }, { status: 503 });
  let verification: { success?: boolean; action?: string; hostname?: string; [key: string]: unknown };
  try {
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ secret: turnstileSecret, response: data.turnstileToken, remoteip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "" }), signal: AbortSignal.timeout(10_000) });
    verification = await verifyResponse.json();
  } catch { return Response.json({ error: "Verification is temporarily unavailable. Please try again." }, { status: 503 }); }
  const allowedHosts = new Set((process.env.TURNSTILE_ALLOWED_HOSTNAMES || "").split(",").map((item) => item.trim()).filter(Boolean));
  const validProductionContext = isDevelopment || (verification.action === "contact" && !!verification.hostname && allowedHosts.has(verification.hostname));
  if (!verification.success || !validProductionContext) return Response.json({ error: "Verification expired or failed. Please try again." }, { status: 403 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return Response.json({ error: "Email delivery is not configured yet. Please use direct email." }, { status: 503 });

  const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, typeof value === "string" ? escapeHtml(value) : value]));
  const resend = new Resend(apiKey);
  const subjectName = data.name.replace(/[\r\n]+/g, " ");
  const subjectCompany = data.company.replace(/[\r\n]+/g, " ");
  const subject = `[Portfolio ${data.type}] ${subjectName}${subjectCompany ? ` — ${subjectCompany}` : ""}`;
  const text = `Inquiry type: ${data.type}\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "—"}\nProject URL: ${data.projectUrl || "—"}\nTimeline: ${data.timeline || "—"}\nBudget: ${data.budget || "—"}\n\n${data.message}`;
  const { error } = await resend.emails.send({ from, to, replyTo: data.email, subject, text, html: `<h2>${safe.type} inquiry</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Company:</strong> ${safe.company || "—"}</p><p><strong>Project URL:</strong> ${safe.projectUrl || "—"}</p><p><strong>Timeline:</strong> ${safe.timeline || "—"}</p><p><strong>Budget:</strong> ${safe.budget || "—"}</p><hr/><p style="white-space:pre-wrap">${safe.message}</p>` });
  if (error) return Response.json({ error: "Email delivery failed. Please try again or use direct email." }, { status: 502 });
  return Response.json({ ok: true });
}
