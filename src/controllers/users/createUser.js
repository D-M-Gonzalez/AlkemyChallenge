import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to create a new user
export const createUser = async (req, res) => {
  const response = new UserMessage("create");
  if (!req.body.email) { //Checks if there is an email in the body
    response.setStatusMessage(406);
  }
  try {
    const checkRepeated = await User.exists({ email: req.body.email }); //checks if it exists
    if (!checkRepeated) { //doesn't allow repeated usernames
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        phonenumber: req.body.phonenumber,
      });
      const userSaved = await newUser.save();
      response.setStatusMessage(200);
      response.setData(userSaved);
    } else {
      response.setStatusMessage(409);
    }
  } catch (error) {
    response.setStatusMessage(500);
  }
  res.json(response); //returns the entire object with the stored status and data
};
