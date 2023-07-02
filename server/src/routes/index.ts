import express from 'express';

import authRoutes from './auth.routes';
import categoryRoutes from './category.routes';
import orderRoutes from './order.routes';
import sushiRoutes from './sushi.routes';

const router = express.Router({ mergeParams: true });

router.use('/sushi', sushiRoutes);
router.use('/categories', categoryRoutes);
router.use('/auth', authRoutes);
router.use('/orders', orderRoutes);

export default router;
