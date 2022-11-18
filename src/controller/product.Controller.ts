import {Request, Response} from "express";
import {Product} from "../model/product";

class ProductController {
    saveProduct = async (req:Request,res:Response)=>{
        let newProduct = req.body
        console.log(newProduct)
        await Product.create(newProduct)
        res.json({
            mess:"tạo thành công"
        })
    }
    showProduct = async (req:Request,res:Response)=>{
        let products = await Product.find().populate('category','nameCategory')
        res.json(products)
    }
}
export default new ProductController()