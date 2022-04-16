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

brandsSchema.plugin(mongoosePaginate);
export default model("brand",brandsSchema);