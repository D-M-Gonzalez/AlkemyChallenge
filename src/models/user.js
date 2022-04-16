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
//Product schema definition with child items
const usersSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,      
    },
    surname: {
        type: String,
    },
    address: {
        type: String,
    },
    phonenumber: {
        type: Number,
    },
    items: itemsSchema
},{
    versionKey: false,
    timestamps: true
})

//User model export
usersSchema.plugin(mongoosePaginate);
export default model('User',usersSchema);