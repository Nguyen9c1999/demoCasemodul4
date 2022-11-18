import { Request, Response } from "express";
declare class TestController {
    findAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TestController;
export default _default;
