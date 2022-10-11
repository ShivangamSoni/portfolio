import { Schema, model, models, connection } from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const ProjectSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        imageUrl: {
            type: String,
            require: true,
        },
        sourceCode: {
            type: String,
            require: true,
        },
        liveDemo: {
            type: String,
        },
        order: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

autoIncrement.initialize(connection);
ProjectSchema.plugin(autoIncrement.plugin, {
    model: "Project",
    field: "order",
    unique: false,
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
