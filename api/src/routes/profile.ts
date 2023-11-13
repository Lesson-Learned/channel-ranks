import { Router } from 'express';
import { verifyAdmin } from '../admin';
import { createProfile, getUid, readIsAdmin } from '../profile';

const router = Router();

router.post('/', getUid, createProfile);

router.get('/is-admin', getUid, verifyAdmin, readIsAdmin);

export default router;
