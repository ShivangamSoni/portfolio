import { FC, FormEventHandler, useState } from "react";
import { createPortal } from "react-dom";
import { IOmitForForm, IProjects } from "../..";
import {
    Button,
    Error,
    FormField,
    Input,
    InputGroup,
    Label,
    StyledForm,
    Textarea,
} from "../../../../Common/Form/Styled";

const ProjectsModal: FC<{
    onClose: () => void;
    onSubmit: (obj: Omit<IProjects, keyof IOmitForForm>) => Promise<any>;
    editData?: Omit<IProjects, keyof IOmitForForm>;
}> = ({ onClose, onSubmit, editData }) => {
    const [{ name, description, imageUrl, sourceCode, liveDemo }, setState] =
        useState(() => {
            if (!!editData) {
                return editData;
            }

            return {
                name: "",
                description: "",
                imageUrl: "",
                sourceCode: "",
                liveDemo: "",
            };
        });
    const [formError, setFormError] = useState("");

    const handleChange = (
        field: keyof Omit<IProjects, keyof IOmitForForm>,
        value: string,
    ) => {
        setState((prev) => {
            return {
                ...prev,
                [field]: value,
            };
        });
    };

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();

        if (
            name.trim() === "" ||
            description.trim() === "" ||
            imageUrl.trim() === "" ||
            sourceCode.trim() === ""
        ) {
            setFormError(
                "Enter Appropriate Data. Apart from Live Demo All other Fields are Required",
            );
            return;
        }

        const response = await onSubmit({
            name,
            description,
            imageUrl,
            sourceCode,
            liveDemo,
        });

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

                <FormField>
                    <InputGroup inputFilled={name.length > 0}>
                        <Label>Name</Label>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                handleChange("name", e.target.value)
                            }
                        />
                    </InputGroup>
                </FormField>

                <FormField>
                    <InputGroup inputFilled={imageUrl.length > 0}>
                        <Label>Image URL</Label>
                        <Input
                            type="text"
                            value={imageUrl}
                            onChange={(e) =>
                                handleChange("imageUrl", e.target.value)
                            }
                        />
                    </InputGroup>
                </FormField>

                <FormField>
                    <InputGroup inputFilled={sourceCode.length > 0}>
                        <Label>Source Code</Label>
                        <Input
                            type="text"
                            value={sourceCode}
                            onChange={(e) =>
                                handleChange("sourceCode", e.target.value)
                            }
                        />
                    </InputGroup>
                </FormField>

                <FormField>
                    <InputGroup inputFilled={!!liveDemo && liveDemo.length > 0}>
                        <Label>Live Demo</Label>
                        <Input
                            type="text"
                            value={liveDemo}
                            onChange={(e) =>
                                handleChange("liveDemo", e.target.value)
                            }
                        />
                    </InputGroup>
                </FormField>

                <FormField fillSpace>
                    <InputGroup inputFilled={description.length > 0}>
                        <Label>Description</Label>
                        <Textarea
                            value={description}
                            onChange={(e) =>
                                handleChange("description", e.target.value)
                            }
                        />
                    </InputGroup>
                </FormField>

                <Button type="submit">
                    {!!editData ? "Edit Project" : "Add Project"}
                </Button>
            </StyledForm>
        </div>,
        document.getElementById("modal") as HTMLElement,
    );
};

export default ProjectsModal;
