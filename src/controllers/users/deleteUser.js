import User from "../../models/user"

export const deleteUser = async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({
            message: `User were deleted successfully`
        })
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}