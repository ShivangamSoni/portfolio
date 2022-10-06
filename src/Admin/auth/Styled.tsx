import styled from "styled-components";
import { makeSection } from "../../Common/globalStyled";

export const Wrapper = styled.div`
    ${makeSection}

    width: min(900px, 96%);

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    gap: 50px;
`;

export const Link = styled.a``;
