import express from 'express';
import { getProducts, getProductById, deleteProduct } from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').delete(protect, admin, deleteProduct).get(getProductById);

export default router;
