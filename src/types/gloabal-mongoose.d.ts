import mongoose from "mongoose"

declare global {
    var mongoose : {
        connection: mongoose.Connection | null, 
        promise: Promise<mongoose.Connection> | null,
    }
}

export {};