import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
)

const userModel = mongoose.model('User', userShema)

export default userModel