import Image from "next/image";
import type { FC } from "react";

import { Section, Title } from "../Common/globalStyled";
import PERSONAL_INFO from "./Constants/PersonalInfo";
import {
    Content,
    ImageWrapper,
    Info,
    InfoItem,
    InfoList,
    Label,
    Para,
} from "./Styled";

const About: FC = () => {
    return (
        <Section>
            <Title>That&apos;s Me</Title>

            <Content>
                <ImageWrapper>
                    <Image
                        src="https://drive.google.com/uc?export=view&id=1_TnAlIrIxxDYbvnpiE3rAd2_bG-8GR6V"
                        alt="Shivangam Soni"
                        layout="responsive"
                        width="200px"
                        height="200px"
                    />
                </ImageWrapper>

                <Info>
                    <Para>
                        I&apos;m an Aspiring Web Developer who enjoys writing
                        Code. I have strong Technical Skills & an Academic
                        Background in Computer Science Engineering. I&apos;m
                        interested in Front-End Web Development. I enjoy
                        Developing a Web Design into a beautiful Web Site.
                    </Para>
                    <Para>
                        But in the Longer Run my Focus is to be a Full Stack Web
                        Developer & as the first step towards my dream, I&apos;m
                        Learning MERN Stack Development.
                    </Para>

                    <InfoList>
                        {PERSONAL_INFO.map(({ id, label, data }) => (
                            <InfoItem key={id}>
                                <Label>{label}:</Label> {data}
                            </InfoItem>
                        ))}
                    </InfoList>
                </Info>
            </Content>
        </Section>
    );
};

export default About;
