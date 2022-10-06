export const validateName = (name: string) => {
    let nameErrorMsg = "";
    const nameRegex = /^([a-zA-Z]{3,})+(\s([a-zA-Z\s]{1,})+)*$/;
    if (!nameRegex.test(name.trim())) {
        nameErrorMsg =
            "Name Can only Contain Alphabets.\nIt Should have at least 3 Characters.";
    }
    return nameErrorMsg;
};

export const validateEmail = (email: string) => {
    let emailErrorMsg = "";
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        emailErrorMsg = "Enter a Valid Email";
    }
    return emailErrorMsg;
};

export const validatePassword = (password: string) => {
    let passwordErrorMsg = "";
    if (password.length < 8 || password.length > 16) {
        passwordErrorMsg = "Password should be between 8 to 16 Characters";
    }
    return passwordErrorMsg;
};

export const validateSubject = (subject: string) => {
    let subjectError = subject.trim() === "" ? "Subject Can't be Empty" : "";
    return subjectError;
};

export const validateMessage = (message: string) => {
    let messageError = message.trim() === "" ? "Message Can't be Empty" : "";
    return messageError;
};
