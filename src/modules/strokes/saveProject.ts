import { AppThunk } from 'store';
import { createProject } from 'api/projects';

export const saveProject = (
  projectName: string,
  thumbnail: string,
): AppThunk => async (_dispatch, getState) => {
  try {
    const response = await createProject(
      projectName,
      getState().strokes,
      thumbnail,
    );

    console.log(response);
  } catch (error) {
    console.error((error as Error).message);
  }
};
