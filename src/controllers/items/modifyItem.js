import User from "../../models/user";
import ItemMessage from "../../messages/itemMessages";

//Controller used to delete an user
export const modifyItem = async (req, res) => {
  const response = new ItemMessage("update");
  if (req.body.user_id && req.body.user_id != "6258ecb61eab7e4ac5a0d3dd") { //Check if the user isn't example
    try {
      const user = await User.findById(req.body.user_id); //searches for the user
      const item = user.items.findIndex(el=>{ //Searches the specific item into the user
        return req.body.item_id == el._id;
      })
      if (user) { //If the user exists
        if (item || item==0){ //And the item exists or it is the unique one, proceed
            user.items[item] = {
                description: req.body.description,
                category: req.body.category,
                date: req.body.date,
                value: req.body.value,
                type: req.body.type,
            }
            const userSaved = await user.save();
            response.setStatusMessage(200);
            response.setData(userSaved);
        }
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