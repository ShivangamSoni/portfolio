import type { FC, FormEventHandler } from "react";
import { useState } from "react";

import {
    Button,
    Input,
    InputGroup,
    Label,
    StyledForm,
    Textarea,
} from "./Styled";

const DEFAULT_STATE = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const Form: FC = () => {
    const [{ name, email, subject, message }, setState] =
        useState(DEFAULT_STATE);

    const handleChange = (field: string, value: string) =>
        setState((prev) => ({ ...prev, [field]: value }));

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log({ name, email, subject, message });
        setState(DEFAULT_STATE);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputGroup inputFilled={name.length > 0}>
                <Label>Name</Label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => handleChange("name", e.target.value)}
                />
            </InputGroup>

            <InputGroup inputFilled={email.length > 0}>
                <Label>Email</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
            </InputGroup>

            <InputGroup fillSpace inputFilled={subject.length > 0}>
                <Label>Subject</Label>
                <Input
                    type="text"
                    value={subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                />
            </InputGroup>

            <InputGroup fillSpace inputFilled={message.length > 0}>
                <Label>Message</Label>
                <Textarea
                    value={message}
                    onChange={(e) => handleChange("message", e.target.value)}
                />
            </InputGroup>

            <Button>Send Message</Button>
        </StyledForm>
    );
};

export default Form;
