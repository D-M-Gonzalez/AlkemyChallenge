import User from "../../models/user"

export const createUser = async (req,res)=>{
    if(!req.body.user_name || !req.body.password){
        return res.status(400).send({message: 'Content cannot be empty'})
    }

    try {
        const checkRepeated = await User.exists({user_name: req.body.user_name})
        if (!checkRepeated){
            const newUser = new User({
                user_name: req.body.user_name,
                password: req.body.password
            })
            const userSaved = await newUser.save();
            res.json({message:req.body.user_name})
        }else{
            res.status(400).send("User already exists")
        }
    } catch(error) {
        res.status(500).json({
            message: error.message || 'Something went wrong'
        })
    }

}