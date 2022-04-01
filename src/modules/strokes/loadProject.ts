import { AppThunk } from 'store';
import { setStrokes } from 'modules/strokes/slice';
import { getProject } from 'api/projects';

export const loadProject = (id: string): AppThunk => async (dispatch) => {
  try {
    const { project } = await getProject(id);

    dispatch(setStrokes(project.strokes));
  } catch (error) {
    console.error((error as Error).message);
  }
};
