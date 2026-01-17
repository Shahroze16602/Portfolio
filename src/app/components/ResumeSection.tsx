"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import ResumeProjects from './ResumeProjects';
import Education from './Education';
import Certifications from './Certifications';
import Interests from './Interests';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

export default function ResumeSection() {
    return (
        <motion.section
            className="min-h-screen bg-background text-foreground p-6 md:p-12 space-y-16 max-w-7xl mx-auto pt-[15vh]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="flex flex-col gap-2 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">Resume</h1>
                <p className="font-mono text-accent tracking-widest text-sm">PROFESSIONAL HISTORY</p>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Summary, Skills, Education, Interests */}
                <div className="lg:col-span-4 space-y-12">
                    <AboutMe />
                    <Skills />
                    <Education />
                    <Certifications />
                    <Interests />
                </div>

                {/* Right Column: Experience, Projects */}
                <div className="lg:col-span-8 space-y-16">
                    <Experience />
                    <ResumeProjects />
                </div>
            </motion.div>
        </motion.section>
    );
}
