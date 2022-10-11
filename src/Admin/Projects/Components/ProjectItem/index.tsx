import type { FC } from "react";
import { useState } from "react";
import { IOmitForForm, IProjects } from "../..";
import ProjectsModal from "../ProjectsModal";

import { Reorder, useDragControls } from "framer-motion";

const ProjectItem: FC<{ project: IProjects; isReorder: boolean }> = ({
    project,
    isReorder,
}) => {
    const { id, name, description, imageUrl, liveDemo, sourceCode, order } =
        project;
    const controls = useDragControls();

    const [show, setShow] = useState(false);

    const handleEditSubmit = async ({
        name,
        description,
        imageUrl,
        liveDemo,
        sourceCode,
    }: Omit<IProjects, keyof IOmitForForm>) => {
        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    imageUrl,
                    liveDemo,
                    sourceCode,
                }),
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

    const handleDelete = async () => {
        const response = await fetch(`/api/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <Reorder.Item
            value={project}
            dragListener={false}
            dragControls={controls}
        >
            <h4>{name}</h4>
            <span>{description}</span>
            <button onClick={() => setShow(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>

            <button
                className="reorder-handle"
                onPointerDown={(e) => controls.start(e)}
                disabled={!isReorder}
            >
                Drag
            </button>

            {show && (
                <ProjectsModal
                    onClose={() => setShow(false)}
                    onSubmit={handleEditSubmit}
                    editData={{
                        name,
                        description,
                        imageUrl,
                        sourceCode,
                        liveDemo,
                    }}
                />
            )}
        </Reorder.Item>
    );
};

export default ProjectItem;
