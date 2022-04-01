import { Stroke } from 'types';
import { httpGet, httpPost, httpDelete } from 'services/http';

export const getProjectsList = async () => {
  const response = await httpGet(`http://localhost:4000/projects`);
  const data = await response.json();

  console.log('projects', data);

  return data;
};


export const createProject = async (name: string, strokes: Stroke[], image: string) => {
  const response = await httpPost(`http://localhost:4000/projects/new`, {
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
  const response = await httpGet(`http://localhost:4000/projects/${id}`);
  const data = await response.json();

  return data;
};

export const deleteProject = async (id: string) => {
  const response = await httpDelete(`http://localhost:4000/projects/${id}`);
  const data = await response.json();

  return data;
};
