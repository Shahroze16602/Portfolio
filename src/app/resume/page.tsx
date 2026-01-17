"use client";

import ResumeSection from "../components/ResumeSection";
import Header from "../components/Header";
import Contact from "../components/Contact";

export default function ResumePage() {
    return (
        <main className="relative bg-background">
            <Header />
            <div className="pt-24">
                <ResumeSection />
            </div>
            <Contact />
        </main>
    );
}
