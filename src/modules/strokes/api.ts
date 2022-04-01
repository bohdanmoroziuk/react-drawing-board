import { Stroke } from 'types';

export const newProject = async (name: string, strokes: Stroke[], image: string) => {
  const response = await fetch(`http://localhost:4000/projects/new`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      strokes,
      image,
    }),
  });

  const data = await response.json();

  return data;
};

export const getProject = async (id: string) => {
  const response = await fetch(`http://localhost:4000/projects/${id}`);
  const data = await response.json();

  return data;
};
