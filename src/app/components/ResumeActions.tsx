"use client";

import { track } from "@vercel/analytics";
import { Download } from "lucide-react";

export default function ResumeActions() {
  return <a href="/Muhammad-Shahroze-Android-Engineer.pdf" download onClick={() => track("resume_download")} className="button button-primary"><Download size={15} /> Download PDF</a>;
}
