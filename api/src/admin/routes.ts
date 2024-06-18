import { Router } from 'express';
import { asyncHandler } from '../shared';
import { createShow } from './controllers/create-show';
import { updateShow } from './controllers/update-show';

const router = Router();

router.post('/shows', asyncHandler(createShow));
router.patch('/shows/:id', asyncHandler(updateShow));

export { router as adminRouter };
