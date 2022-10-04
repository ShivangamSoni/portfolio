import styled from "styled-components";
import { makeSection } from "../Common/globalStyled";

export const Section = styled.section`
    ${makeSection}

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    padding: 1.5rem;
    width: min(600px, 90%);
    color: ${({ theme }) => theme.text[300]};
`;
