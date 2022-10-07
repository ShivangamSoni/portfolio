import type { FC } from "react";
import { useState } from "react";
import SkillsModal from "./Components/SkillsModal";
import Table from "./Components/Table";

export interface ISkills {
    id: string;
    name: string;
    rating: number;
    order: number;
}

const SkillsComp: FC<{ skills: ISkills[] }> = ({ skills }) => {
    const [modal, setModal] = useState(false);

    const handleAddSubmit = async ({
        name,
        rating,
    }: {
        name: string;
        rating: number;
    }) => {
        try {
            const response = await fetch("/api/skills", {
                method: "POST",
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

    return (
        <div>
            <h1>SkillsComp</h1>
            <button onClick={() => setModal(true)}>Add New Skill</button>
            {modal && (
                <SkillsModal
                    onClose={() => setModal(false)}
                    onSubmit={handleAddSubmit}
                />
            )}

            <Table skills={skills} />
        </div>
    );
};

export default SkillsComp;
