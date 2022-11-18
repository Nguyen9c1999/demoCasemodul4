"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchame = new mongoose_1.Schema({
    productName: String,
    price: Number,
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category"
    }
});
const Product = (0, mongoose_1.model)('Product', ProductSchame);
exports.Product = Product;
//# sourceMappingURL=product.js.map