import type { FC, FormEventHandler } from "react";
import { useState, useCallback, useEffect } from "react";

import {
    validateEmail,
    validateMessage,
    validateName,
    validateSubject,
} from "../../../../utils/formValidation";
import { DEFAULT_FORM_INFO, DEFAULT_STATE } from "./constants";
import {
    Button,
    Error,
    FormField,
    Input,
    InputGroup,
    Label,
    StyledForm,
    Success,
    Textarea,
} from "./Styled";

const Form: FC = () => {
    const [{ data, error }, setState] = useState(DEFAULT_STATE);
    const [formInfo, setFormInfo] = useState(DEFAULT_FORM_INFO);

    const handleChange = (
        parent: "data" | "error",
        field: "name" | "email" | "subject" | "message",
        value: string,
    ) => {
        setState((prev) => {
            return { ...prev, [parent]: { ...prev[parent], [field]: value } };
        });
    };

    const validateNameField = useCallback(() => {
        const nameError = validateName(data.name);
        handleChange("error", "name", nameError);
        return nameError !== "";
    }, [data.name]);

    const validateEmailField = useCallback(() => {
        const emailError = validateEmail(data.email);
        handleChange("error", "email", emailError);
        return emailError !== "";
    }, [data.email]);

    const validateSubjectField = useCallback(() => {
        const subjectError = validateSubject(data.subject);
        handleChange("error", "subject", subjectError);
        return subjectError !== "";
    }, [data.subject]);

    const validateMessageField = useCallback(() => {
        let messageError = validateMessage(data.message);
        handleChange("error", "message", messageError);
        return messageError !== "";
    }, [data.message]);

    useEffect(() => {
        if (data.name.trim()) {
            validateNameField();
        }
    }, [data.name, validateNameField]);

    useEffect(() => {
        if (data.email.trim()) {
            validateEmailField();
        }
    }, [data.email, validateEmailField]);

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        if (
            validateNameField() ||
            validateEmailField() ||
            validateSubjectField() ||
            validateMessageField()
        ) {
            return;
        }

        try {
            const response = await fetch("/api/contact/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormInfo({
                    data: "Successfully Sent! I'll Contact You Soon.",
                    error: "",
                });
            } else {
                const data = await response.json();
                throw data;
            }
        } catch (e) {
            console.error(e);
            setFormInfo({
                // @ts-expect-error
                error: `Error Submitting Form: ${e.error}`,
                data: "",
            });
        }

        setState(DEFAULT_STATE);
        setFormInfo(DEFAULT_FORM_INFO);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {(formInfo.data || formInfo.error) && (
                <FormField fillSpace>
                    {formInfo.data && <Success>{formInfo.data}</Success>}
                    {formInfo.error && <Error>{formInfo.error}</Error>}
                </FormField>
            )}
            <FormField>
                <InputGroup inputFilled={data.name.length > 0}>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        value={data.name}
                        onChange={(e) =>
                            handleChange("data", "name", e.target.value)
                        }
                    />
                </InputGroup>
                {error.name && <Error>{error.name}</Error>}
            </FormField>

            <FormField>
                <InputGroup inputFilled={data.email.length > 0}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value={data.email}
                        onChange={(e) =>
                            handleChange("data", "email", e.target.value)
                        }
                    />
                </InputGroup>
                {error.email && <Error>{error.email}</Error>}
            </FormField>

            <FormField fillSpace>
                <InputGroup inputFilled={data.subject.length > 0}>
                    <Label>Subject</Label>
                    <Input
                        type="text"
                        value={data.subject}
                        onChange={(e) =>
                            handleChange("data", "subject", e.target.value)
                        }
                    />
                </InputGroup>
                {error.subject && <Error>{error.subject}</Error>}
            </FormField>

            <FormField fillSpace>
                <InputGroup inputFilled={data.message.length > 0}>
                    <Label>Message</Label>
                    <Textarea
                        value={data.message}
                        onChange={(e) =>
                            handleChange("data", "message", e.target.value)
                        }
                    />
                </InputGroup>
                {error.message && <Error>{error.message}</Error>}
            </FormField>

            <Button type="submit">Send Message</Button>
        </StyledForm>
    );
};

export default Form;
