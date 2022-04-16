import Product from "../../models/Product"
import Brand from "../../models/Brand"

export const findProductById = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        const brand = await Brand.findById(product.brand)
        res.json(product + brand)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}