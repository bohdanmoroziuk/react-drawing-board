import { AppThunk } from 'store';
import { Project } from 'types';
import { getProjectsListSuccess, getProjectsListFailure } from 'modules/projectsList/slice';
import { fetchProjectsList } from 'modules/projectsList/api';

export const getProjectsList = (): AppThunk => async (dispatch) => {
  try {
    const projectsList: Project[] = await fetchProjectsList();

    dispatch(getProjectsListSuccess(projectsList));
  } catch (error) {
    dispatch(getProjectsListFailure((error as Error).toString()));
  }
};
