"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                <p className="text-accent font-mono uppercase tracking-widest mb-6">What's Next?</p>
                <h2 className="text-6xl md:text-9xl font-heading font-bold uppercase tracking-tighter text-white mb-12">
                    Let's Work<br />Together
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <a href="mailto:smshahroze16602@gmail.com" className="group flex flex-col items-center">
                        <span className="text-xl md:text-2xl font-body font-light text-gray-400 group-hover:text-white transition-colors">
                            Send an Email
                        </span>
                        <span className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300 mt-2"></span>
                    </a>

                    <a href="https://linkedin.com/in/muhammad-shahroze" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                        <span className="text-xl md:text-2xl font-body font-light text-gray-400 group-hover:text-white transition-colors">
                            LinkedIn
                        </span>
                        <span className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300 mt-2"></span>
                    </a>

                    <a href="https://github.com/Shahroze16602" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                        <span className="text-xl md:text-2xl font-body font-light text-gray-400 group-hover:text-white transition-colors">
                            GitHub
                        </span>
                        <span className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-300 mt-2"></span>
                    </a>
                </div>

                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-mono uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Muhammad Shahroze</p>
                    <p>Multan, Pakistan</p>
                </div>
            </div>

            {/* Background enhancement */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
}
