"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_Controller_1 = __importDefault(require("../controller/product.Controller"));
const auth_1 = require("../middelware/auth");
exports.productRouter = (0, express_1.default)();
exports.productRouter.use(auth_1.auth);
exports.productRouter.get('/', product_Controller_1.default.showProduct);
exports.productRouter.post('/', product_Controller_1.default.saveProduct);
//# sourceMappingURL=productRouter.js.map