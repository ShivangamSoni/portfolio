import { Schema, model, models } from "mongoose";

const SkillsSchema = new Schema(
    {
        order: {
            type: Number,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            require: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 10,
            require: true,
        },
    },
    {
        timestamps: true,
    },
);

const Skills = models.Skills || model("Skills", SkillsSchema);

export default Skills;
