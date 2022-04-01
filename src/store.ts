import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { modalVisible } from 'modules/modals/slice';
import { projectsList } from 'modules/projectsList/slice';
import currentStroke from 'modules/currentStroke/slice';
import historyIndex from 'modules/historyIndex/slice';
import strokes from 'modules/strokes/slice';
import { RootState } from 'types';

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: combineReducers({
    historyIndex,
    currentStroke,
    strokes,
    modalVisible,
    projectsList,
  }),
  middleware,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
