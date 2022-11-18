import router from "express";
import categoryController from "../controller/category.Controller";
export const categoryRouter = router()
categoryRouter.get('/',categoryController.showProduct)
categoryRouter.post('/',categoryController.saveProduct)