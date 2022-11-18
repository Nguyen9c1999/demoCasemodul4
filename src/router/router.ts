import routerr from "express";
import {userRouter} from "./userRouter";
import {productRouter} from "./productRouter";
import {categoryRouter} from "./categoryRouter";

export const router = routerr()
router.use('/user',userRouter)
router.use('/products',productRouter)
router.use('/category',categoryRouter)
