import {Request, Response} from "express";
import {User} from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middelware/auth";


class UserController {
    register = async (req:Request, res:Response)=>{
        let user = req.body
        user.password = await bcrypt.hash(user.password,10)
        await User.create(user)
        res.status(200).json({
            mess:"thành công"
        })
}
   login = async (req:Request, res:Response)=> {
         const user = req.body
       const userFind = await User.findOne({
           userName : user.userName
       })
       if(!userFind){
           res.json({
               mess: 'ko có tài khoản nào'
           })
       }else {
           let compare = await bcrypt.compare(user.password,userFind.password)
           if(!compare){
               res.json({
                   mess: 'tài khoản sai'
               })
           }else {
               let payload = {userName:userFind.userName}
               let token = await jwt.sign(payload,SECRET,{
                   expiresIn:36000
               })
               res.json(token)

           }
       }

   }

}
export default new UserController()