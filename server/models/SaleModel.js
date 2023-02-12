import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const saleModel = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Schema.Types.Decimal128,
        required: true
    },
    role_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    role_idx: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})
const SaleModel = mongoose.model('Sale', saleModel);

export default SaleModel;