"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchame = new mongoose_1.Schema({
    userName: String,
    password: String
});
const User = (0, mongoose_1.model)('user', userSchame);
exports.User = User;
//# sourceMappingURL=user.js.map