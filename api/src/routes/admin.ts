import { Router } from 'express';
import { readStats, verifyAdmin } from '../admin';
import { getUid } from '../profile';

const router = Router();

router.get('/stats', getUid, verifyAdmin, readStats);

export default router;
