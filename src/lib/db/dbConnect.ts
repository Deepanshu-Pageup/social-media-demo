import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

if(!MONGO_URI) {
    throw new Error("Please define mongodb string")
};

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = {
        connection: null,
        promise: null,
    }
};

export async function dbConnection () {
    if(cached.connection) {
        return cached.connection
        console.log('Already connected to DB');
        
    };

    if(!cached.promise) {
        const opts = {
            bufferCommands: true,
            maxPoolSize: 5,
        }
        cached.promise = mongoose
        .connect(MONGO_URI , opts) 
        .then(() => mongoose.connection)
    };

    try {
       const db = await cached.promise
    } catch (error) {
        cached.promise = null
        throw error
        process.exit(1)
    }

    return cached.connection;
}