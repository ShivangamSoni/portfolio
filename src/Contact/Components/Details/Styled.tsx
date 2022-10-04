import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 1.5em;

    @media screen and (max-width: 1000px) {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    }
`;

export const IconWrapper = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    margin-right: 1em;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};

    transition: color 350ms linear, background-color 300ms linear;

    & > svg {
        width: 25px;
        height: 25px;
    }
`;

export const Detail = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover > ${IconWrapper} {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white[900]};
    }
`;

export const InfoWrapper = styled.div``;

export const Label = styled.h3`
    font-size: 1.35rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text[200]};
`;

export const Info = styled.span`
    font-size: 0.95rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.text[100]};
`;
