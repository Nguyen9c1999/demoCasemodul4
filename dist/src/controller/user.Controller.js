"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middelware/auth");
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let user = req.body;
            user.password = await bcrypt_1.default.hash(user.password, 10);
            await user_1.User.create(user);
            res.status(200).json({
                mess: "thành công"
            });
        };
        this.login = async (req, res) => {
            const user = req.body;
            const userFind = await user_1.User.findOne({
                userName: user.userName
            });
            if (!userFind) {
                res.json({
                    mess: 'ko có tài khoản nào'
                });
            }
            else {
                let compare = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!compare) {
                    res.json({
                        mess: 'tài khoản sai'
                    });
                }
                else {
                    let payload = { userName: userFind.userName };
                    let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    res.json(token);
                }
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.Controller.js.map