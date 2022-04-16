import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to validate an user login request using JWT token
export const logInUser = async (req, res) => {
  const response = new UserMessage("validate");
  if (!req.body.email || !req.body.password) {
    response.setStatusMessage(406);
  } else {
    try {
      const checkUser = await User.findOne({ email: req.body.email });
      const checkPassword =
        checkUser.password === req.body.password ? true : false;
      if (checkUser && checkPassword) {
        response.setStatusMessage(200); 
        response.setData(checkUser);
      } else {
        response.setStatusMessage(401);
      }
    } catch (error) {
      response.setStatusMessage(500);
    }
  }
  res.json(response); //returns the entire object with the stored status and data
};
