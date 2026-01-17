import React from 'react';

const certifications = [
    {
        title: 'M-Labs Summer Program 2024',
        issuer: 'Mindstorm Studios',
        type: 'Certificate of Participation',
        description: 'Training in software development, teamwork, and project experience',
    },
];

export default function Certifications() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">Certifications & Professional Development</h2>
            <div className="space-y-4">
                {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        className="p-6 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-semibold">{cert.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                        <p className="text-xs text-blue-400 mt-1">{cert.type}</p>
                        <p className="text-sm mt-2">{cert.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
