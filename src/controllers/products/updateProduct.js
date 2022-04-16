import Product from "../../models/Product"
import Brand from "../../models/Brand"

export const updateProduct = async(req,res)=>{
    try {
        const foundProduct = await Product.findById(req.query.id);
        const foundBrand = await Brand.exists({brand_name: req.query.brand_name});
        const updatedProduct = {
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            image_url: req.body.image_url,
            price: req.body.price,
        }
        const modifyBrand = await Brand.findById(foundBrand);
        foundProduct.brand = modifyBrand;
        await foundProduct.updateOne(updatedProduct);
        const productSaved = await foundProduct.save();
        res.json({message: 'Product was updated successfully'})
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}