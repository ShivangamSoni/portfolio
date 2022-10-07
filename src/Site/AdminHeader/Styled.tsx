import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1``;

export const Nav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Item = styled.li`
    & + & {
        margin-left: 1rem;
    }
`;

export const Anchor = styled.a`
    appearance: none;
    outline: none;
    text-decoration: none;

    font-size: 0.8rem;
    padding: 0.5em 1em;

    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text[300]};

    transition: color 300ms ease-in, background 250ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.primary};
    }
`;
