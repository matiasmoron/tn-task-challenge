const API = 'http://localhost:4004/tasks';

export const getTasks = async (numberOfTasks = 3) => {
  try {
    const { data } = await fetch(`${API}?quantity=${numberOfTasks}`).then(
      (res) => res.json(),
    );

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const markTaskAsDone = async (data) => {
  try {
    const resp = await fetch(`${API}/tasks`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return resp;
  } catch (err) {
    throw new Error(err);
  }
};
