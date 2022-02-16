import { TaskModel } from '../models/tasks.model';
import { getRemoteTasks } from '../services/tasks.service';

export const getTasks = async (req, res, next) => {
  try {
    const { quantity } = req.query;
    let tasksList = await TaskModel.getNotCompletedTasks({ quantity });
    const localTaskQuantity = tasksList.length;

    if (localTaskQuantity < quantity) {
      await createNewTasks({ quantity: quantity - localTaskQuantity });
      tasksList = await TaskModel.getNotCompletedTasks({ quantity });
    }

    return res.response(tasksList);
  } catch (err) {
    next(err);
  }
};

const createNewTasks = async ({ quantity }) => {
  const remoteTasks = await getRemoteTasks(quantity);
  await TaskModel.createTask(remoteTasks);
};

export const markTaskDone = async (req, res, next) => {
  try {
    const { id } = req.body;

    const result = await TaskModel.markTaskDone({ id });
    return res.response(result);
  } catch (err) {
    next(err);
  }
};
