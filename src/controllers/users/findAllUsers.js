import User from "../../models/user"
import { getPagination } from "../../libs/getPagination";

export const findAllUsers = async(req,res)=>{
    try {
        const {size,page} = req.query;
        const {limit,offset} = getPagination(page,size);
        const list = await User.paginate({},{offset,limit});
        res.json(list)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }
    
}