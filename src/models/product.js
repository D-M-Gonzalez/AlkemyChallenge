import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const brandsSchema = new Schema({
    brand_name: {
        type: String,
        required: true,
        trim: true
    },
    logo_url: {
        type: String,
        required: true,    
    }
},{
    versionKey: false,
    timestamps: true
})

const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true,       
    },
    image_url: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true,
    },
    brand: brandsSchema
},{
    versionKey: false,
    timestamps: true
})

productsSchema.plugin(mongoosePaginate);
export default model('Product',productsSchema);