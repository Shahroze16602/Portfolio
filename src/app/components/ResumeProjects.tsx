import React from 'react';

const projects = [
    {
        title: 'Route Planner – GPS & Maps',
        company: 'Top Edge Technologies',
        description: 'All-in-one travel assistant with multi-stop route planning, nearby places, GPS navigation, parking finder, and live weather updates',
        tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Google Maps API'],
        link: 'https://play.google.com/store/apps/details?id=gpsnavigation.routeplanner.routefinder.tet.app',
    },
    {
        title: 'Schedule Planner & Todo App',
        company: 'Top Edge Technologies',
        description: 'Schedule and task management app with reminders and planning features',
        tech: ['Kotlin', 'XML', 'MVVM', 'Room', 'Google Maps API'],
        link: 'https://play.google.com/store/apps/details?id=todolist.dailyplanner.scheduleplanner.reminders.notes',
    },
    {
        title: 'GPS Navigation & Route Planner App',
        company: 'Appsqueeze Technologies',
        description: 'GPS navigation with saved locations, search history, compass, distance calculation, and Street View',
        tech: ['Kotlin', 'XML', 'MVVM', 'Room', 'Google Maps API'],
        link: null,
    },
    {
        title: 'AI Chatbot App',
        company: 'Appsqueeze Technologies',
        description: 'Real-time AI chatbot with image generation and backend integration',
        tech: ['Kotlin', 'REST APIs', 'Firebase Authentication', 'Room'],
        link: null,
    },
    {
        title: 'Prank Sounds App',
        company: 'Appsqueeze Technologies',
        description: 'Prank soundboard with cloud audio, offline favorites, ringtone and alarm integration',
        tech: ['Kotlin', 'XML', 'Firebase Storage', 'Room', 'MediaPlayer'],
        link: 'https://play.google.com/store/apps/details?id=com.entretenimiento.funny.voice.prank.sounds',
    },
    {
        title: 'Cryptographic Communication Platform',
        company: 'Final Year Project',
        description: 'End-to-end encrypted private and group chat application',
        tech: ['Kotlin (Android)', 'Next.js', 'Node.js', 'Socket.io'],
        link: 'https://github.com/Shahroze16602/FYP-Chat-App',
    },
];

export default function ResumeProjects() {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="p-6 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm hover:bg-opacity-40 transition-all"
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">{project.company}</p>
                        <p className="text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-gray-700 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline text-sm"
                            >
                                View Project →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
