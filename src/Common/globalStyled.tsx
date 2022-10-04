import styled, { css } from "styled-components";

export const makeSection = css`
    width: 100%;
    height: 100%;
`;

export const Section = styled.section`
    ${makeSection}

    width: min(1200px, 96%);
    margin: 0 auto;

    padding: 2rem 0;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    @media screen and (max-width: 1000px) {
        padding: 0;
        padding-bottom: 1rem;
    }
`;

export const Title = styled.h2`
    text-transform: uppercase;
    width: fit-content;

    font-size: 2rem;
    color: ${({ theme }) => theme.text[300]};

    position: relative;

    margin: 1em;
    padding-bottom: 0.7em;

    &::before,
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 1px;

        background-color: ${({ theme }) => theme.white[100]};
    }

    &::after {
        left: 50%;
        bottom: -2px;
        transform: translateX(-50%);

        background-color: ${({ theme }) => theme.primary};
        border-radius: 50vmax;

        width: 35%;
        height: 5px;
    }

    @media screen and (max-width: 1000px) {
        margin-top: 0;
        padding-bottom: 0.2em;
    }
`;
