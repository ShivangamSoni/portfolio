import type { FC, FormEventHandler } from "react";
import { useRef } from "react";

import {
    Button,
    FormField,
    Input,
    InputGroup,
    Label,
    StyledForm,
} from "../../Common/Form/Styled";
import { Wrapper } from "./Styled";

const AdminRegister: FC = () => {
    const emailRef = useRef<null | HTMLInputElement>(null);
    const passwordRef = useRef<null | HTMLInputElement>(null);

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: emailRef.current?.value,
            }),
        });

        console.log(await response.json());
    };

    return (
        <Wrapper>
            <StyledForm onSubmit={handleSubmit}>
                <FormField fillSpace>
                    <InputGroup>
                        <Label>Email</Label>
                        <Input ref={emailRef} type="email" />
                    </InputGroup>
                </FormField>

                <FormField fillSpace>
                    <InputGroup>
                        <Label>Password</Label>
                        <Input ref={passwordRef} type="password" />
                    </InputGroup>
                </FormField>

                <Button type="submit">Register</Button>
            </StyledForm>
        </Wrapper>
    );
};

export default AdminRegister;
