import styled from "styled-components";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 20px;

    margin-top: 3rem;

    @media screen and (max-width: 1000px) {
        margin-top: 0;
        grid-template-columns: 1fr;
    }
`;

export const ImageWrapper = styled.div`
    & img {
        width: 200px;
        height: 200px;
        object-fit: contain;
        border-radius: 50%;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.1rem;

    @media screen and (max-width: 1000px) {
        font-size: 1rem;
    }
`;

export const Para = styled.p`
    & + & {
        margin-top: 0.9em;
    }
`;

export const InfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 2em 0 0;
`;

export const InfoItem = styled.li`
    font-weight: 400;

    & + & {
        margin-top: 1em;
    }
`;

export const Label = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
`;
