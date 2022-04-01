import { AppThunk } from 'store';
import { Project } from 'types';
import { getProjectsListSuccess, getProjectsListFailure } from 'modules/projectsList/slice';
import { getProjectsList } from 'api/projects';

export const loadProjectsList = (): AppThunk => async (dispatch) => {
  try {
    const projectsList: Project[] = await getProjectsList();

    dispatch(getProjectsListSuccess(projectsList));
  } catch (error) {
    dispatch(getProjectsListFailure((error as Error).toString()));
  }
};
