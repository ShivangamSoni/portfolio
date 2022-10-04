import type { FC } from "react";

import { Section, Wrapper } from "./Styled";
import Header from "./Components/Header";
import SocialLinksBar from "./Components/SocialLinkBar";

const Home: FC = () => {
    return (
        <Section>
            <Wrapper>
                <Header />
                <SocialLinksBar />
            </Wrapper>
        </Section>
    );
};

export default Home;
