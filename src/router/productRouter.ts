import router from "express";
import productController from "../controller/product.Controller";
import {auth} from "../middelware/auth";

export const productRouter = router();
productRouter.use(auth)
productRouter.get('/',productController.showProduct)
productRouter.post('/',productController.saveProduct)