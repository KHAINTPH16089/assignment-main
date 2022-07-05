import { Router } from "express";
import { createOrder, createOrderDetail, getOrder } from "../controllers/order.js";

const router = Router();

router.post("/order", createOrder);
router.post("/orderDetail", createOrderDetail);
router.get("/order/:id", getOrder);

export default router;