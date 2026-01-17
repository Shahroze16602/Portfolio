"use client";

import ResumeSection from "../components/ResumeSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ResumePage() {
    return (
        <main className="relative bg-background">
            <Header />
            <div className="pt-24">
                <ResumeSection />
            </div>
            <Footer />
        </main>
    );
}
