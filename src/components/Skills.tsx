"use client";

import React, { useEffect, useState } from "react";

interface Skill {
    id: string;
    name: string;
}

const Skills: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/api/skills')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setSkills(data);
                setError(null);
            })
            .catch(error => {
                console.error("Error fetching skills:", error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading skills...</div>;
    if (error) return <div>Error loading skills: {error}</div>;

    return (
        <section className = "pt-12">
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;