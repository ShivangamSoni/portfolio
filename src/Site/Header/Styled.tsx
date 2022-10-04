import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;

    width: 110px;
    margin-right: 10px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin-right: 0;
        justify-content: flex-end;
    }
`;

export const ListItem = styled.li<{ idx: number }>`
    width: 100%;
    & + & {
        margin-top: 15px;
    }

    @media screen and (max-width: 1000px) {
        margin: 0;
        width: 150px;
        transform: translateX(-100vw);
        transition: transform cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition-delay: 300ms;
        transition-duration: ${({ idx }) => (idx + 1) * 300}ms;
    }
`;

export const Nav = styled.nav<{ show: boolean }>`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    width: 110px;
    padding: 10px;

    @media screen and (max-width: 1000px) {
        inset: 0;
        width: 100%;
        z-index: 1;
        transform: translate(${({ show }) => (show ? "0" : "-200vw")}, 0);
        background-color: ${({ theme }) => theme.secondary};
        transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: transform 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

        ${({ show }) => {
            if (show) {
                return `
                & ${ListItem} {
                    transform: translateX(0);
                }
                `;
            }
        }}
    }
`;

export const LinksList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        height: 100%;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const Icon = styled.span`
    display: inline;
    width: 22px;
    height: 22px;

    & > svg {
        width: inherit;
        height: inherit;
    }
`;

export const Label = styled.span`
    font-size: 0.7em;
    margin-left: 10px;
`;

export const NavLink = styled.a`
    background-color: ${({ theme }) => theme.white[900]};
    color: ${({ theme }) => theme.text[200]};
    text-decoration: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-radius: 100vmax;

    width: 40px;
    padding: 0.5em;

    transition: width 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    & > ${Label} {
        display: none;
        margin-left: 5px;
    }

    &:hover,
    &.active,
    &:focus {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white[900]};
        width: 100%;

        & > ${Label} {
            display: inline;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        justify-content: center;

        & > ${Label} {
            display: inline;
        }
    }
`;

export const Slit = styled.span`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.black[900]};

    transition: transform 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const Hamburger = styled.button<{ open: boolean }>`
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    width: 30px;
    height: 30px;

    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: space-evenly;
    margin: 0.5em;

    position: relative;
    z-index: 1;

    ${({ open, theme }) => {
        if (open) {
            return `
                & > ${Slit} {
                    background-color: transparent;
                }
                
                & > ${Slit}:nth-child(1) {
                    background-color: ${theme.primary};
                    transform: translateY(8px) rotate(-45deg);
                }
                
                & > ${Slit}:nth-last-child(1) {
                    background-color: ${theme.primary};
                    transform: translateY(-8px) rotate(45deg);
                }
            `;
        }
    }}
`;
