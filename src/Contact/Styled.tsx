import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 5rem;
    width: 100%;

    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: auto 1fr;
    align-items: center;

    @media screen and (max-width: 1000px) {
        margin-top: 0;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 20px;
    }
`;

export const FormWrapper = styled.div`
    grid-column: 2;
    grid-row: 1 / -1;

    @media screen and (max-width: 1000px) {
        grid-column: 1;
        grid-row: 2;
    }
`;
