import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const Label = styled.span`
    position: absolute;
    top: 0.4em;
    left: 0.8em;

    font-size: 1em;
    color: ${({ theme }) => theme.text[200]};
    font-weight: 600;
    pointer-events: none;

    transition: all 300ms linear;

    @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
    }
`;

const labelUp = css`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.text[100]};
    transform: translateY(-0.5em);
`;

export const InputGroup = styled.label<{
    fillSpace?: boolean;
    inputFilled?: boolean;
}>`
    ${({ fillSpace }) => {
        if (fillSpace) {
            return {
                gridColumn: "1/-1",
            };
        }
    }}

    border: 1px solid ${({ theme }) => theme.white[100]};
    border-radius: 3px;

    background-color: transparent;

    font-size: 1rem;
    padding: 0.7em 0.2em 0;

    transition: all 300ms linear;

    position: relative;

    &:focus-within {
        border-color: ${({ theme }) => theme.primary};
        border-radius: 5px;

        ${Label} {
            ${labelUp}
        }
    }

    ${Label} {
        ${({ inputFilled }) => {
            if (inputFilled) {
                return labelUp;
            }
        }}
    }

    @media screen and (max-width: 500px) {
        grid-column: 1 / -1;
        font-size: 0.9em;
    }
`;

const inputStyle = css`
    appearance: none;
    outline: none;
    border: none;

    font-size: 1rem;
    padding: 0.2em 0.5em;

    width: 100%;

    color: ${({ theme }) => theme.text[300]};

    @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
    }
`;

export const Input = styled.input`
    ${inputStyle}
`;

export const Textarea = styled.textarea`
    ${inputStyle}

    resize: vertical;
    min-height: 150px;
    max-height: 300px;
`;

export const Button = styled.button`
    appearance: none;
    outline: none;
    background-color: transparent;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 50%,
        ${({ theme }) => theme.primary} 50%,
        ${({ theme }) => theme.primary} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 300%;
    background-position: top left;
    color: ${({ theme }) => theme.text[200]};
    font-weight: 600;

    border: 1px solid ${({ theme }) => theme.white[100]};

    cursor: pointer;

    font-size: 1rem;
    padding: 0.8em 2em;

    grid-column: 1/-1;
    justify-self: center;

    transition: background-position 300ms ease-in-out, color 200ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
        background-position: bottom left;
        color: ${({ theme }) => theme.text[50]};
    }

    @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
    }
`;
