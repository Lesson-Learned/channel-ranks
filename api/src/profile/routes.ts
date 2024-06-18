import { Router } from 'express';
import { asyncHandler, authenticateUser } from '../shared';
import { createProfile } from './controllers/create-profile';
import { readProfile } from './controllers/read-profile';

const router = Router();

router.get('/', authenticateUser(), asyncHandler(readProfile));
router.post('/', authenticateUser(), asyncHandler(createProfile));

export { router as profileRouter };
