import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-auto-rows: 300px;
    gap: 10px;
`;

export const Project = styled.div<{ hovered: null | number; idx: number }>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: 5px;

    cursor: pointer;
    background-color: ${({ theme }) => theme.white[100]};

    padding: 0.5rem;
    border-radius: 3px;

    transition: scale 200ms linear;

    ${({ hovered, idx }) => {
        if (hovered !== null) {
            if (hovered !== idx) {
                return `scale: 0.9`;
            } else {
                return `scale: 1.1`;
            }
        }
    }};
`;

export const ProjectOverlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgb(0, 0, 0, 0.8);
    color: ${({ theme }) => theme.white[900]};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.1rem;
    padding: 0.5rem 1rem;

    text-align: center;

    transform: scale(0);
    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const ProjectHeader = styled.header`
    overflow: hidden;
    position: relative;

    &:hover {
        ${ProjectOverlay} {
            transform: scale(1);
        }
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
`;

export const ProjectFooter = styled.footer``;

export const Title = styled.h3`
    color: ${({ theme }) => theme.text[300]};
    text-transform: uppercase;
    margin-bottom: 5px;
    text-align: center;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Link = styled.a`
    outline: none;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};

    font-size: 0.9rem;
    padding: 0.3em 0.8em;

    color: ${({ theme }) => theme.primary};

    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 50%,
        ${({ theme }) => theme.primary} 50%,
        ${({ theme }) => theme.primary} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 200%;
    background-position: top left;
    transition: background-position 250ms ease-in-out, color 300ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
        background-position: bottom left;
        color: ${({ theme }) => theme.white[100]};
    }
`;
