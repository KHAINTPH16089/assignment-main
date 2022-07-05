import mongoose from "mongoose";

const order = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    total:{
        type: Number,
        require: true
    },
    status:{
        type: Number,
        default: 0
    }
}, {timestamps: true})
export default mongoose.model("Order", order);