import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, Stroke } from 'types';
import { endStroke } from 'modules/sharedActions';

export const initialState: RootState['strokes'] = [];

export const strokesSlice = createSlice({
  name: 'strokes',
  initialState,
  reducers: {
    setStrokes: (state, action: PayloadAction<Stroke[]>) => {
      return action.payload;
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

export const { setStrokes } = strokesSlice.actions;
