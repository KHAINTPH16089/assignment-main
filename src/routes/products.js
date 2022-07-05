import { Router } from "express";
import { create,get, remove, update, list} from "../controllers/product.js";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth.js";
import { userById } from "../middlewares/user.js";

const router = Router();

router.get('/products',  list);
router.post('/products/:userId', requiredSignin, isAuth, isAdmin, create);
router.get('/product/:id',  get);
router.delete('/product/:id/:userId', requiredSignin, isAuth, isAdmin, remove);
router.put('/product/:id/:userId', requiredSignin, isAuth, isAdmin, update);


router.param('userId', userById);

export default router;