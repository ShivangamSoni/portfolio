import type { FC } from "react";
import { useState } from "react";

import { IProjects } from "../../../Admin/Projects";

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

const Projects: FC<{ projects: IProjects[] }> = ({ projects }) => {
    const [hovered, setHovered] = useState<null | number>(null);

    const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

    return (
        <Container>
            {orderedProjects.map(
                (
                    { id, name, imageUrl, description, sourceCode, liveDemo },
                    idx,
                ) => (
                    <Project
                        key={id}
                        hovered={hovered}
                        idx={idx}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <ProjectHeader>
                            <ProjectImage src={imageUrl} />
                            <ProjectOverlay>{description}</ProjectOverlay>
                        </ProjectHeader>

                        <ProjectFooter>
                            <Title>{name}</Title>
                            <Links>
                                {!!liveDemo && (
                                    <Link target="_blank" href={liveDemo}>
                                        Live Demo
                                    </Link>
                                )}
                                <Link target="_blank" href={sourceCode}>
                                    Source Code
                                </Link>
                            </Links>
                        </ProjectFooter>
                    </Project>
                ),
            )}
        </Container>
    );
};

export default Projects;
