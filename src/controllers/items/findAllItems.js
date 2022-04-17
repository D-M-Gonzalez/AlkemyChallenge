import User from "../../models/user";
import ItemMessage from "../../messages/itemMessages";

//Controller used to delete an user
export const findItems = async (req, res) => {
  const response = new ItemMessage("locate");
  if (req.params.id) { //Checks if there is a user id in the parameters
    try {
      const user = await User.findById(req.params.id); //Searches for the user
      if (user) { //If the user exists, proceed
        response.setStatusMessage(200);
        response.setData(user);
      } else {
        response.setStatusMessage(404);
      }
    } catch (error) {
        error.kind === "ObjectId" //returns different message for wrong id format and general server errors
        ? response.setStatusMessage(400)
        : response.setStatusMessage(500);
    }
  } else {
    response.setStatusMessage(406);
  }
  res.json(response); //returns the entire object with the stored status and data
};