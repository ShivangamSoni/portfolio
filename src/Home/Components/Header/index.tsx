import type { FC } from "react";

import { Info, Title } from "./Styled";
import TypeWriter from "../TypeWriter";

const Header: FC = () => {
    return (
        <>
            <Title>
                Hi, I&apos;m <strong>Shivangam Soni</strong>
            </Title>

            <Info>
                I&apos;m a{" "}
                <TypeWriter
                    words={[
                        "Learner",
                        "JavaScript Developer",
                        "Front-End Developer",
                        "React Developer",
                    ]}
                />
            </Info>
        </>
    );
};

export default Header;
