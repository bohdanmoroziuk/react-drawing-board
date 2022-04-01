export const fetchProjectsList = async () => {
  const response = await fetch(`http://localhost:4000/projects`);
  const data = await response.json();

  return data;
};
