import styled from "styled-components";

export const Wrapper = styled.ul`
    list-style: none;

    padding: 0;
    margin-top: 2rem;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`;

export const LinkItem = styled.li``;

export const Link = styled.a<{ iconColor: string }>`
    outline: none;
    border: none;

    display: grid;
    place-items: "center";

    font-size: 1.5rem;

    color: #000;

    border-radius: 50%;
    padding: 0.5em;

    transition: background-color 250ms linear;

    & > svg {
        transition: fill 350ms linear;
    }

    &:hover,
    &:active {
        background-color: ${({ theme }) => theme.black[900]};

        & > svg {
            fill: ${({ iconColor }) => iconColor};
        }
    }
`;
