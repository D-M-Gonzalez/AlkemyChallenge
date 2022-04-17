import {Schema,model} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

//Items schema to use as child
const itemsSchema = new Schema({
    description: {
        type: String,
        required: true,    
    },
    category: {
        type: String,
        required: true,    
    },
    date: {
        type: Date,
        required: true,    
    },
    value: {
        type: Number,
        required: true,    
    },
    type: {
        type: String,
        required: true,    
    },
},{
    versionKey: false,
    timestamps: true
})

//User model export
itemsSchema.plugin(mongoosePaginate);
export default model('Item',itemsSchema);