import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        subject: {
            type: String,
            require: true,
        },
        message: {
            type: String,
            require: true,
        },
        responded: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
