"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { RefObject } from "react";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {

    // Track the same container as the canvas
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const progress = scrollYProgress;

    // Section 1: Hero (0% - 15%)
    const heroOpacity = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0]);
    const heroScale = useTransform(progress, [0, 0.15], [1, 0.9]);
    const heroBlur = useTransform(progress, [0, 0.15], ["0px", "10px"]);

    // Section 2: Statement (25% - 45%)
    // Fix: "Cut from the left". Ensure x moves from 0 to 0 relative, or use % properly.
    // Changing animation: Fade in place, or Slide UP. Sticking to left-slide but smaller range + margins.
    const sect2Opacity = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const sect2X = useTransform(progress, [0.2, 0.35], [-50, 0]); // Small slide from left

    // Section 3: Closing (60% - 90%)
    // User complaint: "comes after animation has ended". 
    // Animation ends at scrollProgress=1.0 (end of 400vh).
    // So we must finish BEFORE 1.0.
    const sect3Opacity = useTransform(progress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
    const sect3Scale = useTransform(progress, [0.6, 0.8], [0.9, 1]);

    return (
        <div className="absolute inset-0 z-50 pointer-events-none w-full h-full">
            {/* Section 1: Hero */}
            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale, filter: heroBlur }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
            >
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-[8vw] leading-[0.9] font-heading font-extrabold tracking-tighter uppercase text-center mix-blend-overlay">
                        Muhammad<br />Shahroze
                    </h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-[2px] bg-accent/50 my-6"
                    />
                    <p className="text-lg md:text-xl font-body font-light tracking-[0.3em] uppercase text-accent/80">
                        Android Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2: Statement */}
            <motion.div
                style={{ opacity: sect2Opacity, x: sect2X }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-20"
            >
                <div className="max-w-4xl pt-12">
                    <p className="text-lg text-accent mb-6 font-mono tracking-widest">01 / CAPABILITIES</p>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold leading-[0.9] tracking-tight text-white mb-8">
                        NATIVE
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white opacity-80">
                            ANDROID
                        </span>
                    </h2>
                    <p className="mt-8 text-xl font-body text-gray-400 max-w-xl leading-relaxed font-light">
                        Building modern, scalable applications with Kotlin, Jetpack Compose, and Clean Architecture.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Closing */}
            <motion.div
                style={{ opacity: sect3Opacity, scale: sect3Scale }}
                className="absolute inset-0 flex items-center justify-end px-6 md:px-20 text-right"
            >
                <div className="max-w-4xl pb-12">
                    <p className="text-lg text-accent mb-6 font-mono tracking-widest">02 / PHILOSOPHY</p>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold leading-[0.9] tracking-tight text-white mb-8">
                        PRECISION <span className="font-serif italic font-light text-accent">&</span>
                        <br />
                        PERFORMANCE
                    </h2>
                    <p className="mt-8 text-xl font-body text-gray-400 ml-auto max-w-xl leading-relaxed font-light">
                        Delivering offline-first, cloud-synced systems that optimize stability and user experience.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
