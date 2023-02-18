import mongoose from 'mongoose'

const patternSchema = mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
    created_at: { type: Date, default: new Date() }
})

const Pattern = mongoose.model('Pattern', patternSchema)
export default Pattern