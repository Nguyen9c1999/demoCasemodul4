"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.saveProduct = async (req, res) => {
            let newProduct = req.body;
            console.log(newProduct);
            await product_1.Product.create(newProduct);
            res.json({
                mess: "tạo thành công"
            });
        };
        this.showProduct = async (req, res) => {
            let products = await product_1.Product.find().populate('category', 'nameCategory');
            res.json(products);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.Controller.js.map