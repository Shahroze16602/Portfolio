"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "Route Planner",
        category: "GPS / Maps",
        description: "All-in-one travel assistant with multi-stop route planning, GPS navigation, and live weather updates. Built with Jetpack Compose and Google Maps API.",
        year: "2025",
        color: "#0a0a0a", // Darkest
        img: null // user can add images later
    },
    {
        title: "Schedule Planner",
        category: "Productivity",
        description: "Task management app featuring comprehensive scheduling, reminders, and efficient data persistence using Room database.",
        year: "2025",
        color: "#161616"
    },
    {
        title: "AI Chatbot",
        category: "Artificial Intelligence",
        description: "Real-time conversational AI with image generation capabilities, integrating Firebase Authentication and RESTful APIs.",
        year: "2024",
        color: "#202020"
    },
    {
        title: "Crypto Communication",
        category: "Security",
        description: "End-to-end encrypted private and group chat platform ensuring secure communication. Built with Kotlin and Node.js.",
        year: "2024",
        color: "#2a2a2a" // Lightest
    },
];

function ProjectCard({
    project,
    index,
    range,
    targetScale
}: {
    project: typeof projects[0],
    index: number,
    range: number[],
    targetScale: number
}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, backgroundColor: project.color, top: `calc(-5vh + ${index * 25}px)` }}
                className="flex flex-col relative -top-[25%] h-[500px] w-[1000px] rounded-3xl p-12 origin-top border border-white/10 shadow-2xl"
            >
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                    <h2 className="text-4xl font-bold uppercase tracking-tight">{project.title}</h2>
                    <span className="font-mono text-accent">{project.year}</span>
                </div>

                <div className="flex h-full gap-12">
                    <div className="w-1/2 flex flex-col justify-between">
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">View Case Study</span>
                            <span className="px-4 py-2 border border-white/20 rounded-full text-xs font-mono uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">Live URL</span>
                        </div>
                    </div>

                    <div className="w-1/2 relative rounded-2xl overflow-hidden bg-black/20">
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold text-6xl uppercase transform -rotate-12">
                            {project.category}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={container} className="relative mt-0 pt-[12vh] pb-[20vh] bg-background">
            {projects.map((project, index) => {
                const targetScale = 1 - ((projects.length - index) * 0.05);
                return (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        range={[index * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
