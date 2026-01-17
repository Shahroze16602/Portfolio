"use client";

import { motion } from "framer-motion";

const skills = [
    "Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM",
    "Hilt / Koin", "Coroutines", "Retrofit", "Room",
    "Firebase", "Google Maps API", "Git", "CI/CD"
];

// Duplicate skills to ensure seamless scrolling
const marqueeSkills = [...skills, ...skills, ...skills];

export default function HomeSkills() {
    return (
        <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white">
                        Technical Arsenal
                    </h2>
                    <p className="mt-4 md:mt-0 text-gray-400 max-w-md font-light text-lg">
                        Modern Android toolkit for scalable apps.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden">
                {/* Gradient Masks for Fade Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {marqueeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 px-8 py-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm whitespace-nowrap"
                        >
                            <span className="text-xl font-heading font-bold text-white uppercase tracking-wider">
                                {skill}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
