import { API_URL } from './constants';

export const getTodos = async () => {
  const results = await fetch(`${API_URL}/todos`);

  if (results.status === 422) {
    const error = await results.json();
    throw new Error(error);
  } else {
    const data = await results.json();
    return data;
  }
};

export const createTodo = async (todo) => {
  const results = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todo }),
  });

  if (results.status === 422) {
    const error = await results.json();
    throw new Error(error);
  } else {
    const data = await results.json();
    return data;
  }
};
