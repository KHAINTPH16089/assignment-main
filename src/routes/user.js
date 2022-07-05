import { Router } from "express";
import { signup, signin, getAll, get} from "../controllers/user.js";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth.js";
import { userById } from "../middlewares/user.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user/:userId", requiredSignin, isAuth, get);
router.get("/users", requiredSignin, isAuth, isAdmin, getAll);

router.param('userId', userById);

export default router;