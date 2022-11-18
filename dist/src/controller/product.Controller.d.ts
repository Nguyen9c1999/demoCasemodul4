import { Request, Response } from "express";
declare class ProductController {
    saveProduct: (req: Request, res: Response) => Promise<void>;
    showProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
