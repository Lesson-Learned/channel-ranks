import { Router } from 'express';
import { asyncHandler, authenticateUser } from '../shared';
import { readShow } from './controllers/read-show';
import { readShows } from './controllers/read-shows';

const router = Router();

router.get('/', authenticateUser(true), asyncHandler(readShows));
router.get('/:id', authenticateUser(true), asyncHandler(readShow));

export { router as showRouter };
