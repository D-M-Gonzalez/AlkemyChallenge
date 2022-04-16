import Product from "../../models/product"
import Brand from "../../models/brand"

export const deleteProduct = async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({
            message: `Product were deleted successfully`
        })
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}