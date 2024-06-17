import { Router } from 'express';
import { asyncHandler, authenticateUser } from '../shared';
import { createProfile } from './controllers/create-profile';

const router = Router();

router.post('/', authenticateUser(), asyncHandler(createProfile));

export { router as profileRouter };
