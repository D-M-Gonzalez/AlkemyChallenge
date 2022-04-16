import Product from "../../models/Product"
import Brand from "../../models/Brand"
import { getPagination } from "../../libs/getPagination";

export const findAllProducts = async(req,res)=>{
    try {
        const {size,page} = req.query;
        const {limit,offset} = getPagination(page,size);
        const list = await Product.paginate({},{offset,limit});
        res.json(list)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }
    
}