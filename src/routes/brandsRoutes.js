import { Router } from "express";
import { createBrand } from "../controllers/brands/createBrand";
import { deleteBrand } from "../controllers/brands/deleteBrand";
import { findAllBrands } from "../controllers/brands/findAllBrands";
import { updateBrand } from "../controllers/brands/updateBrand";

const router = Router();

router.get('/',findAllBrands)

router.post('/',createBrand)

router.delete('/:id',deleteBrand)

router.put('/:id',updateBrand)

export default router;