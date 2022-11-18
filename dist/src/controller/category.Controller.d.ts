import { Request, Response } from "express";
declare class CategoryController {
    saveProduct: (req: Request, res: Response) => Promise<void>;
    showProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
