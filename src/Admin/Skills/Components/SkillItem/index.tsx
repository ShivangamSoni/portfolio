import type { FC } from "react";
import { useState } from "react";
import { ISkills } from "../..";
import SkillsModal from "../SkillsModal";

import { Reorder, useDragControls } from "framer-motion";

const SkillItem: FC<{ skill: ISkills; isReorder: boolean }> = ({
    skill,
    isReorder,
}) => {
    const { id, name, rating, order } = skill;
    const controls = useDragControls();

    const [show, setShow] = useState(false);

    const handleEditSubmit = async ({
        name,
        rating,
    }: {
        name: string;
        rating: number;
    }) => {
        try {
            const response = await fetch(`/api/skills/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, rating }),
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
        const response = await fetch(`/api/skills/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <Reorder.Item
            value={skill}
            dragListener={false}
            dragControls={controls}
        >
            <h4>{name}</h4>
            <span>{rating}/10</span>
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
                <SkillsModal
                    onClose={() => setShow(false)}
                    onSubmit={handleEditSubmit}
                    editData={{ name, rating }}
                />
            )}
        </Reorder.Item>
    );
};

export default SkillItem;
