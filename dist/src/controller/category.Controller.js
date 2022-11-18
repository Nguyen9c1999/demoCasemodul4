"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryController {
    constructor() {
        this.saveProduct = async (req, res) => {
            let newCategory = req.body;
            console.log(newCategory);
            await category_1.Category.create(newCategory);
            res.json({
                mess: "tạo thành công"
            });
        };
        this.showProduct = async (req, res) => {
            let categories = await category_1.Category.find();
            res.json(categories);
        };
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=category.Controller.js.map