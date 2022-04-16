import { Router } from "express";
import { createUser } from "../controllers/users/createUser";
import { deleteUser } from "../controllers/users/deleteUser";
import { findAllUsers } from "../controllers/users/findAllUsers";
import { logInUser } from "../controllers/users/logInUser";
import { updateUser } from "../controllers/users/updateUser";

//User routes definition
const router = Router();

router.get('/',findAllUsers); //Gets all the users stored in the DB

router.post('/',createUser); //Creates a new user

router.put('/:id',updateUser); //Modifies an user by it's id as a parameter, requires token

router.delete('/:id',deleteUser); //Deletes an user by it's id as a parameter, requires token

router.post('/login/user',logInUser); //Validates and logs an user, if it is admin, generates a token

export default router;