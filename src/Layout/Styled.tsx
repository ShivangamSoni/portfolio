import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
`;
