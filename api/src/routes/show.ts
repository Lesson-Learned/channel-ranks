import { Router } from 'express';
import {
  createShow,
  deleteShow,
  readFilePaths,
  readShow,
  readShows,
  updateShow
} from '../show';

const router = Router();

router.post('/', createShow);

router.get('/', readShows);
router.get('/:id', readShow);
router.get('/file-paths/:id', readFilePaths);

router.patch('/:id', updateShow);

router.delete('/:id', deleteShow);

export default router;
