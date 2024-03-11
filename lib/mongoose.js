import mongoose from "mongoose";

export async function initMongoose() {
    // check if connection already have a nice working connection to ur database
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    return await mongoose.connect(process.env.MONGODB_URL);
}