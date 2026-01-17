import React from 'react';

export default function AboutMe() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold uppercase tracking-tight text-white mb-6 border-l-2 border-accent pl-4">About Me</h2>
            <p className="text-lg font-body font-light text-gray-300 leading-relaxed">
                Dedicated Android Developer with 2.5+ years of experience building modern, scalable Android applications using <span className="text-accent">Kotlin</span>, <span className="text-accent">Jetpack Compose</span>, <span className="text-accent">MVVM</span>, and <span className="text-accent">Clean Architecture</span>.
            </p>
            <div className="flex flex-col space-y-2 mt-6 font-mono text-sm tracking-wide">
                <a href="mailto:smshahroze16602@gmail.com" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span>✉</span> smshahroze16602@gmail.com
                </a>
                <a href="tel:+923057965539" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span>📞</span> +92 305 7965539
                </a>
                <div className="flex gap-4 mt-2">
                    <a href="https://linkedin.com/in/muhammad-shahroze" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent underline decoration-1 underline-offset-4">LinkedIn</a>
                    <a href="https://github.com/Shahroze16602" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent underline decoration-1 underline-offset-4">GitHub</a>
                </div>
            </div>
        </section>
    );
}
