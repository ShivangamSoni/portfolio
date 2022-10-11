import type { FC } from "react";
import { useState } from "react";
import ProjectsModal from "./Components/ProjectsModal";
import Table from "./Components/Table";

export interface IProjects {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    sourceCode: string;
    liveDemo?: string;
    order: number;
}

export interface IOmitForForm {
    id: string;
    order: number;
}

const ProjectsComp: FC<{ projects: IProjects[] }> = ({ projects }) => {
    const [show, setShow] = useState(false);

    const handleAddSubmit = async (
        project: Omit<IProjects, keyof IOmitForForm>,
    ) => {
        try {
            const response = await fetch("/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });

            if (response.ok) {
                return true;
            } else {
                throw await response.json();
            }
        } catch (e) {
            // @ts-expect-error
            return e.error;
        }
    };

    return (
        <div>
            <h1>ProjectsComp</h1>

            <button onClick={() => setShow(true)}>Open</button>

            {show && (
                <ProjectsModal
                    onClose={() => setShow(false)}
                    onSubmit={handleAddSubmit}
                />
            )}

            <Table projects={projects} />

            <pre>{JSON.stringify(projects, null, 4)}</pre>
        </div>
    );
};

export default ProjectsComp;
