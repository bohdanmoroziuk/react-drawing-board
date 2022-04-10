import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StrokesState, Stroke } from 'types';
import { endStroke } from 'modules/sharedActions';

export const initialState = [] as StrokesState;

export type SetStrokesActionPayload = Stroke[];

export const strokesSlice = createSlice({
  name: 'strokes',
  initialState,
  reducers: {
    setStrokes: (_state, action: PayloadAction<SetStrokesActionPayload>) => {
      return action.payload;
    },
    resetStrokes: () => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state, action) => {
      const { stroke, historyLimit } = action.payload;

      if (historyLimit === 0) {
        state.push(stroke);
      } else {
        state.splice(-historyLimit, historyLimit, stroke);
      }
    });
  },
});

export default strokesSlice.reducer;

export const { setStrokes, resetStrokes } = strokesSlice.actions;
