import Head from "next/head";
import { useState, useEffect } from "react";

import connectToDB from "../server/utils/connectToDB";
import Project from "../server/models/Project";
import Skill from "../server/models/Skill";
import { IProjects } from "../src/Admin/Projects";
import { ISkills } from "../src/Admin/Skills";

import Resume from "../src/Resume";

export default function ResumePage(props: {
    skills: ISkills[];
    projects: IProjects[];
}) {
    const [skills, setSkills] = useState(() => {
        if (props.skills && props.skills.length > 0) {
            return props.skills;
        }
        return [];
    });
    const [projects, setProjects] = useState(() => {
        if (props.projects && props.projects.length > 0) {
            return props.projects;
        }
        return [];
    });

    useEffect(() => {
        if (skills.length === 0) {
            (async () => {
                const response = await fetch("/api/skills");
                const { skills } = await response.json();
                setSkills(skills);
            })();
        }
    }, [skills]);

    useEffect(() => {
        if (projects.length === 0) {
            (async () => {
                const response = await fetch("/api/projects");
                const { projects } = await response.json();
                setProjects(projects);
            })();
        }
    }, [projects]);

    return (
        <>
            <Head>
                <title>Shivangam Soni | Resume</title>
            </Head>

            <Resume skills={skills} projects={projects} />
        </>
    );
}

export const getStaticProps = async () => {
    await connectToDB();
    const [skills, projects] = await Promise.all([
        Skill.find({}),
        Project.find({}),
    ]);

    const skillsProp = skills.map(({ id, name, rating, order }) => {
        return {
            id,
            name,
            rating,
            order,
        };
    });
    const projectsProp = projects.map(
        ({ id, name, description, imageUrl, sourceCode, liveDemo, order }) => {
            return {
                id,
                name,
                description,
                imageUrl,
                sourceCode,
                liveDemo,
                order,
            };
        },
    );

    return {
        props: {
            skills: skillsProp,
            projects: projectsProp,
        },
        revalidate: 1,
    };
};
