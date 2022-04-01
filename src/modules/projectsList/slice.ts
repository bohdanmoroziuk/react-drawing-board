import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Project, ProjectsListState } from 'types';

export const initialState = {
  error: null,
  pending: true,
  projects: [],
} as ProjectsListState;

export type GetProjectsListSuccessActionPayload = Project[];

export type GetProjectsListFailureActionPayload = string;

export type DeleteProjectSuccessActionPayload = string;

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
    deleteProjectSuccess: (state, action: PayloadAction<DeleteProjectSuccessActionPayload>) => {
      state.projects = state.projects.filter((project) => project.id !== action.payload);
    },
  },
});

export const projectsList = projectsListSlice.reducer;

export const { getProjectsListSuccess, getProjectsListFailure, deleteProjectSuccess } = projectsListSlice.actions;
