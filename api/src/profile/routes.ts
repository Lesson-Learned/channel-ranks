import { Router } from 'express';
import { asyncHandler, authenticateUser } from '../shared';
import { addShowToProfile } from './controllers/add-show-to-profile';
import { createOrReadProfile } from './controllers/create-or-read-profile';
// import { markEpisodeAsWatched } from './controllers/mark-episode-as-watched';
import { readProfileShowData } from './controllers/read-profile-show-data';
// import { readProfileShows } from './controllers/read-profile-shows';
import { removeShowFromProfile } from './controllers/remove-show-from-profile';
import { updateProfileName } from './controllers/update-profile-name';

const router = Router();

router.get('/', authenticateUser(), asyncHandler(createOrReadProfile));
router.get(
  '/shows/:showId',
  authenticateUser(),
  asyncHandler(readProfileShowData)
);
// router.get(
//   '/shows/:showStatus/:start',
//   authenticateUser(),
//   asyncHandler(readProfileShows)
// );

// router.patch(
//   '/episodes/:episodeId/add',
//   authenticateUser(),
//   asyncHandler(markEpisodeAsWatched)
// );
router.patch('/name', authenticateUser(), asyncHandler(updateProfileName));
router.patch(
  '/shows/:showId/add',
  authenticateUser(),
  asyncHandler(addShowToProfile)
);
router.patch(
  '/shows/:showId/remove',
  authenticateUser(),
  asyncHandler(removeShowFromProfile)
);

export { router as profileRouter };
