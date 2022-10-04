import type { FC } from "react";

import useTypeWriter from "../../Hooks/useTypeWriter";
import { TextWithCursor } from "./Styled";

interface Props {
    words: string[];
}

const TypeWriter: FC<Props> = ({ words }) => {
    const text = useTypeWriter({ words });
    return <TextWithCursor>{text}</TextWithCursor>;
};

export default TypeWriter;
