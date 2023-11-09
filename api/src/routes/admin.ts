import { Router } from 'express';
import { readStats } from '../admin';

const router = Router();

router.get('/stats', readStats);

export default router;
