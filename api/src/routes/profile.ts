import { Router } from 'express';
import { verifyAdmin } from '../admin';
import { getUid, readIsAdmin } from '../profile';

const router = Router();

router.get('/is-admin', getUid, verifyAdmin, readIsAdmin);

export default router;
