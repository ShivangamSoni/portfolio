import type { FC } from "react";
import { useState } from "react";

import {
    Container,
    Links,
    Project,
    ProjectFooter,
    ProjectHeader,
    ProjectImage,
    ProjectOverlay,
    Title,
    Link,
} from "./Styled";

const Projects: FC = () => {
    const [hovered, setHovered] = useState<null | number>(null);
    return (
        <Container>
            {Array.from(Array(10).keys()).map((i, idx) => (
                <Project
                    key={i}
                    hovered={hovered}
                    idx={idx}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <ProjectHeader>
                        <ProjectImage src="https://shivangam-soni.netlify.app/static/media/BlogReact.921bcae6.png" />

                        <ProjectOverlay>
                            A Blog App Created created using REACT, REDUX, Node
                            & Express
                        </ProjectOverlay>
                    </ProjectHeader>

                    <ProjectFooter>
                        <Title>React Blog</Title>
                        <Links>
                            <Link>Live Demo</Link>
                            <Link>Source Code</Link>
                        </Links>
                    </ProjectFooter>
                </Project>
            ))}
        </Container>
    );
};

export default Projects;
