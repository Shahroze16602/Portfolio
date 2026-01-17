import React from 'react';

const skillCategories = [
    { title: 'Languages', items: ['Kotlin', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
    { title: 'Android Development', items: ['Jetpack Compose', 'XML', 'Material Design'] },
    { title: 'Architecture & DI', items: ['MVVM', 'Clean Architecture', 'Hilt', 'Koin'] },
    { title: 'Networking', items: ['REST APIs', 'Retrofit', 'Ktor'] },
    { title: 'Databases', items: ['Firebase', 'SQLite', 'Room', 'MongoDB'] },
    { title: 'Version Control', items: ['Git', 'GitHub'] },
    { title: 'Web & Backend', items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Socket.io'] },
];

export default function Skills() {
    return (
        <section className="space-y-6">
            <h2 className="text-2xl font-bold">Technical Skills</h2>
            <div className="grid grid-cols-1 gap-4">
                {skillCategories.map((cat) => (
                    <div key={cat.title} className="p-4 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {cat.items.map((skill) => (
                                <li key={skill} className="text-sm">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
