import Product from "../../models/product"
import Brand from "../../models/brand"

export const createProduct = async (req,res)=>{
    if(!req.body.name || !req.body.price || !req.body.brand.brand_name){
        return res.status(400).send({message: 'Content cannot be empty'})
    }

    try {
        const newProduct = new Product({
            name: req.body.name,
            category: req.body.category,
            description: req.body.description,
            image_url: req.body.image_url ? req.body.image_url : "",
            price: req.body.price,
        })
        const foundBrand = await Brand.exists({brand_name: req.body.brand.brand_name})
        const addBrand = await Brand.findById(foundBrand);
        newProduct.brand = addBrand;
        const productSaved = await newProduct.save();
        res.json(productSaved)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}