import { AppThunk } from 'store';
import { deleteProjectSuccess } from 'modules/projectsList/slice';
import * as api from 'api/projects';

export const deleteProject = (id: string): AppThunk => async (dispatch) => {
  try {
    const response = await api.deleteProject(id);

    dispatch(deleteProjectSuccess(id));

    console.log(response);
  } catch (error) {
    console.error((error as Error).message);
  }
};
