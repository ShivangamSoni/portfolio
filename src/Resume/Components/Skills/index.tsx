import type { FC } from "react";

import SKILL_DATA from "../../Constants/SkillData";
import { Container, Label, ProgressBar, Skill } from "./Styled";

const Skills: FC = () => {
    return (
        <Container>
            {SKILL_DATA.map(({ id, label, progress }) => (
                <Skill key={id}>
                    <Label>{label}</Label>
                    <ProgressBar progress={progress} />
                </Skill>
            ))}
        </Container>
    );
};

export default Skills;
