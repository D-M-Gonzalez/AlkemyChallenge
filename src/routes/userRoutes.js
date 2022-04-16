import { Router } from "express";
import { createUser } from "../controllers/users/createUser";
import { deleteUser } from "../controllers/users/deleteUser";
import { findAllUsers } from "../controllers/users/findAllUsers";
import { logInUser } from "../controllers/users/logInUser";
import { updateUser } from "../controllers/users/updateUser";

const router = Router();

router.get('/',findAllUsers);

router.post('/',createUser);

router.put('/:id',updateUser);

router.delete('/:id',deleteUser);

router.put('/login/user',logInUser);

export default router;