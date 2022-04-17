import User from "../../models/user";
import Item from "../../models/item";
import ItemMessage from "../../messages/itemMessages";

//Controller used to create a new item
export const createItem = async (req, res) => {
  const response = new ItemMessage("create");
  if (!req.body.user_id || req.body.user_id == "6258ecb61eab7e4ac5a0d3dd") { //Check if the user isn't example
    response.setStatusMessage(406);
  } else
  try {
    const getUser = await User.findById(req.body.user_id); //searches for the user
    if (getUser) { //If user exists, proceed
      const newItem = new Item({ //defines the new item
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
        value: req.body.value,
        type: req.body.type,
      });
      getUser.items.push(newItem) //push the item into the user
      const userSaved = await getUser.save();
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