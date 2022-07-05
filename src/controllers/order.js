import Order from "../models/order.js";
import OrderDetail from "../models/orderDetail.js";


export const createOrder = async (req, res) =>{
    try {
        const order = await new Order(req.body).save();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const createOrderDetail = async (req, res) =>{
    try {
        const order = await new OrderDetail(req.body).save();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const getOrder = async (req, res) =>{
    try {
        const order = await Order.findOne({_id: req.params.id}).exec();
        console.log(1);
        const orderDetail = await OrderDetail.find({order: req.params.id}).exec();

        res.json({order, orderDetail});
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}
