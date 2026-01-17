import React from 'react';

const interests = [
    'AI & Machine Learning',
    'Blockchain & Web3',
    'Tech Trends & Innovation',
];

export default function Interests() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold">Interests</h2>
            <div className="flex flex-wrap gap-3">
                {interests.map((interest, idx) => (
                    <div
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium"
                    >
                        {interest}
                    </div>
                ))}
            </div>
        </section>
    );
}
