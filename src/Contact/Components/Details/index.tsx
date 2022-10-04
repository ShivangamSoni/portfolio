import { FC } from "react";
import DETAILS from "../../Constants/Details";
import {
    Detail,
    IconWrapper,
    Info,
    InfoWrapper,
    Label,
    Wrapper,
} from "./Styled";

const Details: FC = () => {
    return (
        <Wrapper>
            {DETAILS.map(({ id, icon: Icon, label, info }) => (
                <Detail key={id}>
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                    <InfoWrapper>
                        <Label>{label}</Label>
                        <Info>{info}</Info>
                    </InfoWrapper>
                </Detail>
            ))}
        </Wrapper>
    );
};

export default Details;
