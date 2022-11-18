import {Schema,model} from 'mongoose'
 export interface ICategory {
  nameCategory:string
}
const categorySchame = new Schema<ICategory>({
    nameCategory:String
})

const Category = model<ICategory>('category',categorySchame)
export {Category}