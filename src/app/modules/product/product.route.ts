import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getAllProducts);
router.get('/api/products/:productId', ProductControllers.getSingleProduct);
router.put('/api/products/:productId', ProductControllers.updateProduct);
router.delete('/api/products/:productId', ProductControllers.deleteProduct);
// router.get('/api/products', ProductControllers.searchProduct);

export const ProductRoutes = router;
