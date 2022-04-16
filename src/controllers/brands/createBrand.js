import Brand from "../../models/brand"

export const createBrand = async (req,res)=>{
    if(!req.body.brand_name){
        return res.status(400).send({message: 'Content cannot be empty'})
    }

    try {
        const newBrand = new Brand({
            brand_name: req.body.brand_name,
            logo_url: req.body.logo_url
        })
        const brandSaved = await newBrand.save();
        res.json(brandSaved)
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}