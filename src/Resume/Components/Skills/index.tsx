import type { FC } from "react";

import { Container, Label, ProgressBar, Skill } from "./Styled";
import { ISkills } from "../../../Admin/Skills";

const Skills: FC<{ skills: ISkills[] }> = ({ skills }) => {
    const orderedSkills = [...skills].sort((a, b) => a.order - b.order);
    return (
        <Container>
            {orderedSkills.map(({ id, name, rating }) => (
                <Skill key={id}>
                    <Label>{name}</Label>
                    <ProgressBar progress={rating} />
                </Skill>
            ))}
        </Container>
    );
};

export default Skills;
