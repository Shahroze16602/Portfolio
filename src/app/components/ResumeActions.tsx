"use client";

import { track } from "@vercel/analytics";
import { Download, Printer } from "lucide-react";

export default function ResumeActions() {
  return <div className="flex flex-wrap gap-3"><a href="/Muhammad-Shahroze-Android-Engineer.pdf" download onClick={() => track("resume_download")} className="button button-primary"><Download size={15} /> Download PDF</a><button type="button" onClick={() => window.print()} className="button button-secondary"><Printer size={15} /> Print page</button></div>;
}
