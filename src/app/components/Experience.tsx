import React from 'react';

const experiences = [
    {
        title: 'Android App Developer',
        company: 'Top Edge Technologies (Pvt) Ltd',
        period: 'May 2025 – Present',
        responsibilities: [
            'Developed and maintained multiple Android applications using Kotlin, Jetpack Compose, MVVM, and Clean Architecture',
            'Implemented Dependency Injection using Hilt and Koin',
            'Integrated Firebase services (Analytics, Crashlytics, Remote Config)',
            'Implemented Google AdMob for monetization',
            'Integrated Google Play Billing for in-app purchases and subscriptions',
            'Integrated backend services using REST APIs via Ktor',
            'Implemented Google APIs (Maps, Calendar, Drive)',
            'Improved app performance, stability, and modular code structure',
        ],
    },
    {
        title: 'Android App Developer',
        company: 'Appsqueeze Technologies (Pvt) Ltd',
        period: 'September 2023 – April 2025',
        responsibilities: [
            'Developed and maintained native Android apps using Kotlin, Java, and XML',
            'Designed modern, responsive UIs following Material Design principles',
            'Implemented MVVM architecture for scalable and maintainable code',
            'Integrated Firebase Authentication, Realtime Database, and Room',
            'Integrated REST APIs using Retrofit',
            'Debugged, optimized, and improved production applications',
            'Collaborated in Agile teams using Git',
        ],
    },
];

export default function Experience() {
    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-heading font-bold uppercase tracking-tight text-white border-l-2 border-accent pl-4">Work Experience</h2>
            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="relative pl-8 border-l border-white/10 last:border-0"
                    >
                        <div className="absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full bg-accent box-content border-4 border-background"></div>

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                            <h3 className="text-2xl font-heading font-bold text-white">{exp.title}</h3>
                            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-1 sm:mt-0">{exp.period}</span>
                        </div>

                        <p className="text-lg text-accent font-medium mb-4">{exp.company}</p>

                        <ul className="space-y-3">
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="text-md text-gray-400 font-light leading-relaxed flex gap-3">
                                    <span className="text-accent mt-1.5 text-xs">●</span>
                                    {resp}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
