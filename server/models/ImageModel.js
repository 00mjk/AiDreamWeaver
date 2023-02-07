import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ImageSchema = Schema({
    url: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user_avatar: {
        type: String
    },
    user_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    prompt: String,
    negative_prompt: String,
    init_img_url: String,
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    seed: Object,
    sampler: Number,
    guidance_scale: {
        type: Number,
        required: true
    },
    quality_details: {
        type: Number,
        required: true
    },
    fav_count: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const ImageModel = mongoose.model('Image', ImageSchema);

export default ImageModel;