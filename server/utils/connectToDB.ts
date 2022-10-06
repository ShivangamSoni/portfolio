import mongoose from "mongoose";

const connectToDB = async () => {
    // @ts-expect-error
    return mongoose.connect(process.env.MONGO_URI);
};

export default connectToDB;
