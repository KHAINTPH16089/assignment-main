import User from "../models/user.js";

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findOne({_id: id}).exec();
        console.log(user);
        if(!user){
            res.status(400).json({
                message: "không tìm thấy user"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error);
    }
}