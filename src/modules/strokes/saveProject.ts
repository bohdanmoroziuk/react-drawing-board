import { AppThunk } from 'store';
import { newProject } from 'modules/strokes/api';

export const saveProject = (
  projectName: string,
  thumbnail: string,
): AppThunk => async (_dispatch, getState) => {
  try {
    const response = await newProject(
      projectName,
      getState().strokes,
      thumbnail,
    );

    console.log(response);
  } catch (error) {
    console.error((error as Error).message);
  }
};
