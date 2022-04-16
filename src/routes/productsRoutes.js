import { Router } from "express";
import { findAllProducts } from "../controllers/products/findAllProducts";
import { createProduct } from "../controllers/products/createProduct";
import { deleteProduct } from "../controllers/products/deleteProduct";
import { updateProduct } from "../controllers/products/updateProduct";
import { findProductById } from "../controllers/products/findProductById";

const router = Router();

router.get('/', findAllProducts)

router.post('/',createProduct)

router.put('/',updateProduct)

router.get('/:id',findProductById)

router.delete('/:id',deleteProduct)

export default router;