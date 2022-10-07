import type { FC, ChangeEventHandler, FormEventHandler } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

import {
    Button,
    Error,
    FormField,
    Input,
    InputGroup,
    Label,
    StyledForm,
} from "../../../../Common/Form/Styled";

const SkillsModal: FC<{
    onClose: () => void;
    onSubmit: (obj: { name: string; rating: number }) => Promise<any>;
    editData?: {
        name: string;
        rating: number;
    };
}> = ({ onClose, onSubmit, editData }) => {
    const [{ name, rating }, setState] = useState(() => {
        if (!!editData) {
            return editData;
        }

        return {
            name: "",
            rating: 1,
        };
    });
    const [formError, setFormError] = useState("");

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setState((prev) => {
            return {
                ...prev,
                name: e.target.value,
            };
        });
    };

    const handleRatingChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let value = e.target.valueAsNumber;
        value = value > 10 ? 10 : value < 1 ? 1 : value;

        setState((prev) => {
            return {
                ...prev,
                rating: value,
            };
        });
    };

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            rating.toString().trim() === "" ||
            rating < 1 ||
            rating > 10
        ) {
            setFormError(
                "Enter Appropriate Data. Name & Rating can't be Empty. Rating should be between 1 & 10.",
            );
            return;
        }

        const response = await onSubmit({ name, rating });
        if (response === true) {
            onClose();
        } else {
            setFormError(response);
        }
    };

    return createPortal(
        <div>
            <Button type="button" onClick={onClose}>
                &times;
            </Button>
            <StyledForm onSubmit={handleSubmit}>
                {formError && (
                    <FormField fillSpace>
                        <Error>{formError}</Error>
                    </FormField>
                )}
                <FormField fillSpace>
                    <InputGroup inputFilled={name.length > 0}>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </InputGroup>
                </FormField>

                <FormField fillSpace>
                    <InputGroup inputFilled={rating.toString().length > 0}>
                        <Label>Rating</Label>
                        <Input
                            type="number"
                            step="1"
                            value={rating}
                            onChange={handleRatingChange}
                        />
                    </InputGroup>
                </FormField>

                <Button type="submit">
                    {!!editData ? "Edit Skill" : "Add Skill"}
                </Button>
            </StyledForm>
        </div>,
        document.getElementById("modal") as HTMLElement,
    );
};

export default SkillsModal;
