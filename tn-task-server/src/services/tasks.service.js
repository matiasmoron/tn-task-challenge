import axios from 'axios';

const TASK_ENDPOINT = 'https://lorem-faker.vercel.app/api';

export const getRemoteTasks = async (quantity) => {
  const response = await axios.get(`${TASK_ENDPOINT}?quantity=${quantity}`);
  return response.data;
};
