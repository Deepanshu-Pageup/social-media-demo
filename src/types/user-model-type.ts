import mongoose from "mongoose"
export interface IUser {
    id?:mongoose.Types.ObjectId;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
