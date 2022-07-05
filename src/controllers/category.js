import Category from "../models/category.js";
import Product from "../models/product.js";

export const create = async (req, res) =>{
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}

export const getAll = async (req, res) =>{
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}
export const get = async (req, res) =>{
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const product = await Product.find({ category }).limit(3).select("-category").exec();
        res.json({
            category, product
        });
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

export const remove = async (req, res) =>{
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

export const update = async (req, res) =>{
    const conditions = {_id: req.params.id};
    const update = {name: "category A update"}

    try {
        const category = await Category.findOneAndUpdate(conditions, update).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}