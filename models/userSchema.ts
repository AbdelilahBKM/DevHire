import mongoose, { Schema, Document } from "mongoose"

interface IUser extends Document {
    id: string,
    username: string,
    email: string,
    password: string,
    fullname: string,
    avatar?: string,
    resume: string,
    createdAt: Date,
    updatedAt: Date
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    fullname: {type: String, require: true},
    avatar: {type: String, require: false},
    resume: {type: String, require: true},
    createdAt: {type: Date, require: true},
    updatedAt: {type: Date, require: true},
})

const User = mongoose.model<IUser>('User', UserSchema)
export default User