import type { FC } from "react";

import { VscDesktopDownload as Download } from "react-icons/vsc";
import { Section, Title } from "../Common/globalStyled";
import { Button, Wrapper } from "./Styled";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const Resume: FC = () => {
    return (
        <Section>
            <Title>Resume</Title>

            <Button title="Download Resume.pdf">
                <Download />
            </Button>

            <Wrapper>
                <Skills />
                <Projects />
            </Wrapper>
        </Section>
    );
};

export default Resume;
