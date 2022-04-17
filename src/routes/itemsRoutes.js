import { Router } from "express";
import { createItem } from "../controllers/items/createItem";
import { deleteItem } from "../controllers/items/deleteItem";
import { findItems } from "../controllers/items/findAllItems";
import { modifyItem } from "../controllers/items/modifyItem";

//User routes definition
const router = Router();

router.put('/', modifyItem) //Modifies an item using user id and item id matching

router.delete('/',deleteItem) //Deletes an item using user id and item id matching

router.post('/',createItem) //Creates a new item for this user

router.get('/:id',findItems) //Gets all items from this user

export default router;