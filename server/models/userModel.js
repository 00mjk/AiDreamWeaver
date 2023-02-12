import mongoose from 'mongoose'
// const Schema = import ('mongoose').Schema;

import pkg from 'mongoose';
const { Schema } = pkg;

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role_id: { type: Schema.Types.ObjectId, required: true },
    role_idx: { type: Number, default: 0 },
    remain_cnt: { type: Number },
    start_date: { type: Date },
    end_date: { type: Date },
    avatar: { type: String },
    follow_cnt: { type: Number, default: 0 },
    created_at: { type: Date, default: new Date() },
    deleted_at: { type: Date },
    resetToken: String,
    expireToken: Date
})

const User = mongoose.model('User', userSchema)
export default User