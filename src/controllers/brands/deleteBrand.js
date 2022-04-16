import Product from "../../models/product"
import Brand from "../../models/brand"

export const deleteBrand = async(req,res)=>{
    try {
        await Brand.findByIdAndDelete(req.params.id)
        res.json({
            message: `Brand were deleted successfully`
        })
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}