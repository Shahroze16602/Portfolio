"use client";

import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSkills from "./components/HomeSkills";
import Contact from "./components/Contact";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We pass the Ref down so both components track the EXACT same element's scroll
  return (
    <main className="relative bg-background">
      <Header />

      {/* Scroll-linked Section (400vh) */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas containerRef={containerRef} />
          <Overlay containerRef={containerRef} />
        </div>
      </div>

      <HomeSkills />
      <Projects />
      <Contact />
    </main>
  );
}
