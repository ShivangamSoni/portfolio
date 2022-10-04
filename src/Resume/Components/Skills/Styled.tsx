import styled from "styled-components";

export const Container = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const Skill = styled.li``;

export const Label = styled.span`
    color: ${({ theme }) => theme.text[200]};
    font-size: 1rem;
    font-weight: 700;
`;

export const ProgressBar = styled.div<{ progress: number }>`
    height: 15px;
    background-color: ${({ theme }) => theme.black[300]};

    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ progress }) => {
            let width = progress * 10;
            width = width <= 100 ? width : 100;
            return `${width}%`;
        }};
        height: 100%;

        background-color: ${({ theme }) => theme.primary};
    }
`;
