import { RootState } from 'types';

export const projectsListSelector = (state: RootState) => state.projectsList;

export const projectsSelector = (state: RootState) => state.projectsList.projects;
