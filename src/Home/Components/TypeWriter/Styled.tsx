import styled, { keyframes } from "styled-components";

const Blink = keyframes`
0% {
  opacity: 1;
}
49% {
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 0;
}
`;

const Pulse = keyframes`
0% {
  transform: scaleY(0);
}
100% {
  transform: scaleY(1);
}
`;

interface Props {
    cursor?: string;
}
export const TextWithCursor = styled.span<Props>`
    position: relative;
    margin-right: 1.2ch;

    &::after {
        content: "${({ cursor }) => cursor || "_"}";
        position: absolute;
        bottom: 0;
        right: -1ch;

        color: inherit;

        font-weight: 900;
        height: 100%;

        animation: ${Blink} 800ms ease-in-out 0ms infinite forwards;
        /* animation: ${Pulse} 350ms linear 0ms infinite alternate; */
    }
`;
