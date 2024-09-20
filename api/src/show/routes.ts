import { Router } from 'express';
import { asyncHandler } from '../shared';
import { readShow } from './controllers/read-show';
import { readShows } from './controllers/read-shows';

const router = Router();

router.get('/', asyncHandler(readShows));
router.get('/:showId', asyncHandler(readShow));

export { router as showRouter };
