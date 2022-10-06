import Link from "next/link";
import { useRouter } from "next/router";
import type { FC, FormEventHandler } from "react";
import { useRef } from "react";

import { signIn } from "next-auth/react";

import {
    Button,
    FormField,
    Input,
    InputGroup,
    Label,
    StyledForm,
} from "../../Common/Form/Styled";
import { Wrapper } from "./Styled";

const AdminSignIn: FC = () => {
    const emailRef = useRef<null | HTMLInputElement>(null);
    const passwordRef = useRef<null | HTMLInputElement>(null);

    const { replace } = useRouter();

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        const response = await signIn("credentials", {
            redirect: false,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        });

        if (response?.ok) {
            replace("/Admin/Skills");
        }
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

                <Button type="submit">Login</Button>
            </StyledForm>

            <span>
                Ended Up Here..? Well You can <Link href="/">Go Back</Link>{" "}
                anytime
            </span>
        </Wrapper>
    );
};

export default AdminSignIn;
