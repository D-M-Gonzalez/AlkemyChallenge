import Brand from "../../models/Brand"

export const updateBrand = async(req,res)=>{
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, req.body)
        res.json({message: 'Brand was updated successfully'})
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}