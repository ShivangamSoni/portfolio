import { Schema, model, models, connection } from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const SkillSchema = new Schema(
    {
        order: {
            type: Number,
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

autoIncrement.initialize(connection);
SkillSchema.plugin(autoIncrement.plugin, {
    model: "Skill",
    field: "order",
    unique: false,
});

const Skill = models.Skill || model("Skill", SkillSchema);

export default Skill;
