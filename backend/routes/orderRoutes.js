import express from 'express';
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders); //make sure ('/:id')  is at bottom
router.route('/:id').get(protect, getOrderById); //make sure ('/:id')  is at bottom
router.route('/:id/pay').put(protect, updateOrderToPaid); //make sure ('/:id')  is at bottom

export default router;
