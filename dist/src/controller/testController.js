"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../model/test");
class TestController {
    constructor() {
        this.findAll = async (req, res) => {
            await test_1.Test.create(req.body);
            res.send('oke');
        };
    }
}
exports.default = new TestController();
//# sourceMappingURL=testController.js.map