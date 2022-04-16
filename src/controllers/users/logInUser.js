import User from "../../models/user"

export const logInUser = async (req,res)=>{
    if(!req.body.user_name || !req.body.password){
        return res.status(400).send({message: 'Content cannot be empty'})
    }
    try {
        const checkUser = await User.exists({user_name: req.body.user_name})
        const checkPassword = await User.exists({password: req.body.password})

        if(checkUser && checkPassword) {
            res.status(200).send({message: req.body.user_name})
        } else {
            res.status(400).send({message:"failed"})
        }
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}