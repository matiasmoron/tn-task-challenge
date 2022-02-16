import express from 'express';
import { getTasks, markTaskDone } from '../controllers/tasks.controller';
import { validateGetTasks } from '../validations/tasks';
const router = express.Router();

router.get('/', validateGetTasks(), getTasks);
router.put('/:id', markTaskDone);

export default router;
