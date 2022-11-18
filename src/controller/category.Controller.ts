import {Request, Response} from "express";
import {Category} from "../model/category";


class CategoryController {
    saveProduct = async (req:Request,res:Response)=>{
        let newCategory = req.body
        console.log(newCategory)
        await Category.create(newCategory)
        res.json({
            mess:"tạo thành công"
        })
    }
    showProduct = async (req:Request,res:Response)=>{
        let categories = await Category.find()
        res.json(categories)
    }
}
export default new CategoryController()