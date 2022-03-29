import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { endStroke } from 'modules/sharedActions';

export const initialState: RootState['strokes'] = [];

export const strokesSlice = createSlice({
  name: 'strokes',
  initialState,
  reducers: {},
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
