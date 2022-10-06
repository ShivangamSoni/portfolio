import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    },
);

const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;
