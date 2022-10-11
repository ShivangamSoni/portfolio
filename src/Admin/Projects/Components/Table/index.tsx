import { Reorder } from "framer-motion";
import { FC, Suspense, useState, useEffect, useRef } from "react";
import { IProjects } from "../..";
import ProjectItem from "../ProjectItem";

const Table: FC<{ projects: IProjects[] }> = ({ projects }) => {
    const [isReorder, setIsReorder] = useState(false);
    const [projectsState, setProjectsState] = useState(
        [...projects].sort((a, b) => a.order - b.order),
    );
    const oldProjects = useRef(projectsState);

    useEffect(() => {
        if (
            !isReorder &&
            JSON.stringify(projectsState) !==
                JSON.stringify(oldProjects.current)
        ) {
            (async () => {
                const newOrder = projectsState.map((project, idx) => ({
                    ...project,
                    order: idx + 1,
                }));
                const response = await fetch("/api/projects/reorder", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ projects: newOrder }),
                });
                oldProjects.current = projectsState;
            })();
        }
    }, [projectsState, isReorder]);

    const onReorder = (reordered: IProjects[]) => {
        setProjectsState(reordered);
    };

    return (
        <div>
            <button onClick={() => setIsReorder((prev) => !prev)}>
                {isReorder ? "Save New Order" : "Reorder"}
            </button>

            {/* TODO: try adding a Fallback without Suspense & see if works with Framer */}

            <Suspense fallback={"loading"}>
                <Reorder.Group
                    axis="y"
                    values={projectsState}
                    onReorder={onReorder}
                >
                    {projectsState.map((project) => (
                        <ProjectItem
                            key={project.id}
                            project={project}
                            isReorder={isReorder}
                        />
                    ))}
                </Reorder.Group>
            </Suspense>
        </div>
    );
};

export default Table;
