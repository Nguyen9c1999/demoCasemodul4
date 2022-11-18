"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const mongoose_1 = require("mongoose");
const testSchame = new mongoose_1.Schema({
    userName: String,
    password: String
});
const Test = (0, mongoose_1.model)('test', testSchame);
exports.Test = Test;
//# sourceMappingURL=test.js.map