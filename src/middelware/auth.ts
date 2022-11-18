
import jwt from "jsonwebtoken"
export const SECRET = 'Nguyen'
export const auth = (req,res,next)=>{
    let authorization = req.headers.authorization

    if(authorization){
        let accessToken = authorization.split(' ')[1]

        if(!accessToken){
            res.json({
                mess:"nguoi dung chua xac thuc1"
            })
        }else {
            jwt.verify(accessToken,SECRET,(err,data)=>{
                if(err){
                    res.json({
                        mess:"người dùng chưa xác thực2"
                    })
                }else {

                    req.decode = data

                    next()
                }
            })
        }
    }else {
        res.json({
            mess:"nguoi dung chua xac thuc3"
        })
    }
}