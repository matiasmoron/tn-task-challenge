import { db } from '../services/database';

const Tasks = db.ref('tasks');

const getAllTask = async () => {
  const tasks = await Tasks.get();
  const data = tasks.val();

  return Object.entries(data).map(([key, value]) => ({
    ...value,
    id: key,
  }));
};

const getNotCompletedTasks = async ({ quantity }) => {
  const allTask = await getAllTask();

  return allTask
    .filter((task) => !task.is_completed)
    .slice(0, Number(quantity));
};

const createTask = async (descriptions) => {
  const result = await descriptions.forEach(async (description) => {
    await Tasks.push({
      description,
      is_completed: false,
    });
  });

  return result;
};

const markTaskDone = async ({ id }) => {
  const Task = db.ref(`tasks/${id}`);

  const result = await Task.update({ is_completed: true });

  return result;
};

export const TaskModel = {
  getNotCompletedTasks,
  createTask,
  markTaskDone,
};
