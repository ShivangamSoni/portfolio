import type { FC } from "react";

import { VscDesktopDownload as Download } from "react-icons/vsc";
import { Section, Title } from "../Common/globalStyled";
import { Button, Wrapper } from "./Styled";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { ISkills } from "../Admin/Skills";
import { IProjects } from "../Admin/Projects";

const Resume: FC<{ skills: ISkills[]; projects: IProjects[] }> = ({
    skills,
    projects,
}) => {
    return (
        <Section>
            <Title>Resume</Title>

            <Button
                title="View Resume"
                href="https://www.linkedin.com/in/shivangam-soni/overlay/1635505345073/single-media-viewer/"
                target="_blank"
            >
                <Download />
            </Button>

            <Wrapper>
                <Skills skills={skills} />
                <Projects projects={projects} />
            </Wrapper>
        </Section>
    );
};

export default Resume;
