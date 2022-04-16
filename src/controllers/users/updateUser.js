import User from "../../models/user"

export const updateUser = async(req,res)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.json({message: 'User was updated successfully'})
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}