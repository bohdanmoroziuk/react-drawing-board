import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Project, Nullable } from 'types';

export type ProjectsListState = {
  error: Nullable<string>;
  pending: boolean;
  projects: Project[];
};

export const initialState = {
  error: null,
  pending: true,
  projects: [],
} as ProjectsListState;

export const projectsListSlice = createSlice({
  name: 'projectsList',
  initialState,
  reducers: {
    getProjectsListSuccess: (state, action: PayloadAction<Project[]>) => {
      state.error = null;
      state.pending = false;
      state.projects = action.payload;
    },
    getProjectsListFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.pending = false;
      state.projects = [];
    },
  },
});

export const projectsList = projectsListSlice.reducer;

export const { getProjectsListSuccess, getProjectsListFailure } = projectsListSlice.actions;
