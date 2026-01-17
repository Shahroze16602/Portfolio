import React from 'react';

export default function Education() {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-heading font-bold uppercase tracking-tight text-white pl-4 border-l-2 border-accent">Education</h2>
            <div className="p-6 border border-white/10 bg-white/5 rounded-none backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-heading font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-sm font-mono text-accent mt-2">Bahauddin Zakariya University, Multan</p>
                <div className="flex justify-between items-end mt-4">
                    <p className="text-xs text-gray-500 font-mono uppercase">Expected: June 2025</p>
                    <p className="text-sm font-bold text-white">
                        CGPA: <span className="text-accent">3.59</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
