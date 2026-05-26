import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "@/types";


const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
    },
    {timestamps: true},
);

userSchema.pre("save", async function () {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password , 10)
    }
})

const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;