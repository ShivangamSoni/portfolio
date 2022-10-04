import styled from "styled-components";

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;

    & > strong {
        display: block;
    }
`;

export const Info = styled.h2`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text[50]};
    font-family: "Source Code Pro", sans-serif;
    font-weight: 400;
    text-align: right;
    margin-top: 0.5rem;

    & > span {
        font-weight: 700;
    }
`;
