import {Schema,model} from 'mongoose'
import {ICategory} from "./category";

interface IProduct {
    productName ?:string,
   price ?:number,
    category : ICategory

}
const ProductSchame = new Schema<IProduct>({
    productName : String,
   price : Number,
    category : {
        type: Schema.Types.ObjectId,
        ref:"category"
    }

})

const Product = model<IProduct>('Product',ProductSchame)
export {Product}