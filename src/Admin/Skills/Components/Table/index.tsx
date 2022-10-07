import { Reorder } from "framer-motion";
import { FC, Suspense, useState, useEffect } from "react";
import { ISkills } from "../..";
import SkillItem from "../SkillItem";

const Table: FC<{ skills: ISkills[] }> = ({ skills }) => {
    const [isReorder, setIsReorder] = useState(false);
    const [skillsState, setSkillsState] = useState(
        [...skills].sort((a, b) => a.order - b.order),
    );

    useEffect(() => {
        if (!isReorder) {
            (async () => {
                const newOrder = skillsState.map((skill, idx) => ({
                    ...skill,
                    order: idx + 1,
                }));

                const response = await fetch("/api/skills/reorder", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ skills: newOrder }),
                });
            })();
        }
    }, [skillsState, isReorder]);

    return (
        <div>
            <button onClick={() => setIsReorder((prev) => !prev)}>
                {isReorder ? "Save New Order" : "Reorder"}
            </button>

            {/* TODO: try adding a Fallback without Suspense & see if works with Framer */}

            <Suspense fallback={"loading"}>
                <Reorder.Group
                    axis="y"
                    values={skillsState}
                    onReorder={setSkillsState}
                >
                    {skillsState.map((skill) => (
                        <SkillItem
                            key={skill.id}
                            skill={skill}
                            isReorder={isReorder}
                        />
                    ))}
                </Reorder.Group>
            </Suspense>
        </div>
    );
};

export default Table;
