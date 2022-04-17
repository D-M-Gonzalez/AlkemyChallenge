import User from "../../models/user";
import UserMessage from "../../messages/userMessages";

//Controller used to return a list of all users
export const findAllUsers = async (req, res) => {
  let response = []; //Prepares the response to return an array
  try {
    const list = await User.find() //Finds all users
    response = list.map((el) => { //Maps each one in the response
      const doc = new UserMessage("locate");
      doc.setStatusMessage(200);
      doc.setData(el);
      return doc;
    });
    res.json(response); //returns the entire object array with the stored status and data
  } catch (error) {
    const singleResponse = new UserMessage("locate");
    singleResponse.setStatusMessage(500);
    res.json(singleResponse); //returns the entire object with the stored status and data
  }
};
