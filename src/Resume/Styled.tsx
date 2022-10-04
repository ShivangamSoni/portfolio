import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
    gap: 30px;
`;

export const Button = styled.button`
    appearance: none;
    outline: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text[100]};
    color: ${({ theme }) => theme.text[100]};
    background-color: ${({ theme }) => theme.text[50]};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    & > svg {
        width: 25px;
        height: 25px;
    }

    transition: color 300ms ease-in, background-color 250ms linear;

    &:hover,
    &:active,
    &:focus {
        color: ${({ theme }) => theme.text[50]};
        background-color: ${({ theme }) => theme.primary};
        border-color: transparent;
    }
`;
