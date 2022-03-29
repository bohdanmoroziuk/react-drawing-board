import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { reducer as currentStroke } from 'modules/currentStroke/reducer';
import historyIndex from 'modules/historyIndex/slice';
import strokes from 'modules/strokes/slice';

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer: combineReducers({
    historyIndex,
    currentStroke,
    strokes
  }),
  middleware,
});
