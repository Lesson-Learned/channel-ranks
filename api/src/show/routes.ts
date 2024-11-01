import { Router } from 'express';
import { asyncHandler } from '../shared';
import { readEpisode } from './controllers/read-episode';
import { readShow } from './controllers/read-show';
import { readShows } from './controllers/read-shows';
//import { searchShows } from './controllers/search-shows';

const router = Router();

router.get('/', asyncHandler(readShows));
// router.get('/search', asyncHandler(searchShows));

router.get('/:showId', asyncHandler(readShow));
router.get('/:showId/episodes/:episodeId', asyncHandler(readEpisode));

export { router as showRouter };
