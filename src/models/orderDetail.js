import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

const OrderDetail = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    status: {
        type: Number,
        default: 1
    },
    quantity: {
        type: Number,
        require: true
    },
    order: {
        type: ObjectId,
        required: true
    }
}, {timestamps: true})
export default mongoose.model("OrderDetail", OrderDetail);