import type { FC } from "react";

import { Section, Title } from "../Common/globalStyled";
import { FormWrapper, Wrapper } from "./Styled";
import Details from "./Components/Details";
import Form from "./Components/Form";

const Contact: FC = () => {
    return (
        <Section>
            <Title>Get in Touch</Title>

            <Wrapper>
                <Details />
                <FormWrapper>
                    <Form />
                </FormWrapper>
            </Wrapper>
        </Section>
    );
};

export default Contact;
