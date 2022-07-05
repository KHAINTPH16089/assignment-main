import { Router } from "express";
import { create, getAll, get, remove, update } from "../controllers/category.js";

const router = Router();

router.post("/category", create);
router.get("/categorys", getAll);
router.get("/category/:id", get);
router.delete("/category/:id", remove);
router.put("/category/:id", update);

export default router;