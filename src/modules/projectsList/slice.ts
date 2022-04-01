import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Project, ProjectsListState } from 'types';

export const initialState = {
  error: null,
  pending: true,
  projects: [],
} as ProjectsListState;

export type GetProjectsListSuccessActionPayload = Project[];

export type GetProjectsListFailureActionPayload = string;

export const projectsListSlice = createSlice({
  name: 'projectsList',
  initialState,
  reducers: {
    getProjectsListSuccess: (state, action: PayloadAction<GetProjectsListSuccessActionPayload>) => {
      state.error = null;
      state.pending = false;
      state.projects = action.payload;
    },
    getProjectsListFailure: (state, action: PayloadAction<GetProjectsListFailureActionPayload>) => {
      state.error = action.payload;
      state.pending = false;
      state.projects = [];
    },
  },
});

export const projectsList = projectsListSlice.reducer;

export const { getProjectsListSuccess, getProjectsListFailure } = projectsListSlice.actions;
