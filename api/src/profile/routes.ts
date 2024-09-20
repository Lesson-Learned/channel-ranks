import { Router } from 'express';
import { asyncHandler, authenticateUser } from '../shared';
import { readProfile } from './controllers/read-profile';

const router = Router();

router.get('/', authenticateUser(), asyncHandler(readProfile));

export { router as profileRouter };
