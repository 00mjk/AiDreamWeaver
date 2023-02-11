import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: Number, default: 0 },
    resetToken: String,
    expireToken: Date,
})

const User = mongoose.model('User', userSchema)

export default User