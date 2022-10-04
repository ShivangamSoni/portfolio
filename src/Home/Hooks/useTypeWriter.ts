import { useReducer, useRef, useEffect, useCallback } from "react";

import reducer from "./reducer";

interface Props {
    words: string[];
    loop?: true | number;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
}

const useTypeWriter = ({
    words,
    loop = true,
    typeSpeed = 100,
    deleteSpeed = 80,
    delaySpeed = 1500,
}: Props) => {
    const [{ text, speed, count, isDeleting }, dispatch] = useReducer(reducer, {
        text: "",
        count: 0,
        isDeleting: false,
        speed: typeSpeed,
    });

    const loopCount = useRef(0);
    const isDone = useRef(false);

    const handleTyping = useCallback(() => {
        const idx = count % words.length;
        const word = words[idx];

        if (!isDeleting) {
            dispatch({
                type: "TYPE",
                payload: { text: word, speed: typeSpeed },
            });

            if (text === word) {
                dispatch({ type: "DELAY", payload: delaySpeed });

                if (Number.isInteger(loop)) {
                    loopCount.current += 1;

                    if (loopCount.current / words.length === loop) {
                        isDone.current = true;
                    }
                }
            }
        } else {
            dispatch({
                type: "DELETE",
                payload: { text: word, speed: deleteSpeed },
            });

            if (text === "") {
                dispatch({ type: "COUNT" });
            }
        }
    }, [
        count,
        words,
        isDeleting,
        typeSpeed,
        delaySpeed,
        text,
        loop,
        deleteSpeed,
    ]);

    useEffect(() => {
        if (!isDone.current) {
            const typing = setTimeout(handleTyping, speed);
            return () => clearTimeout(typing);
        }
    }, [handleTyping, speed]);

    return text;
};

export default useTypeWriter;
