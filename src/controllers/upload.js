import axios from "axios";
import cloudinary from "../utils/cloudinary.js"
export const upload = async (req, res) =>{
    try {
        const file = req.body.data
        const uploadedResponse = await cloudinary.uploader.upload(file, {upload_preset: "assignment"},)
        res.json(uploadedResponse);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được ảnh"
        })
    }
}

export const remove = async (req, res) =>{
    try {
        const id = req.params.id;
        const removeResponse = await cloudinary.uploader.destroy(id);
    } catch (error) {
        res.status(400).json({
            error: "không xóa được ảnh"
        })
    }
}
