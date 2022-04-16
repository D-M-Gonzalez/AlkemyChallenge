import { getPagination } from "../../libs/getPagination";
import Brand from "../../models/brand"

export const findAllBrands = async(req,res)=>{
    try {
        const {size,page} = req.query;
        const {limit,offset} = getPagination(page,size);
        const list = await Brand.find()
        res.json(list)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }
    
}