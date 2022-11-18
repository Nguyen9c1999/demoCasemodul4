import {Schema,model} from 'mongoose'
interface IUser {
    userName ?:string,
    password ? :string
}
const userSchame = new Schema<IUser>({
    userName : String,
    password:String
})

const User = model<IUser>('user',userSchame)
export {User}