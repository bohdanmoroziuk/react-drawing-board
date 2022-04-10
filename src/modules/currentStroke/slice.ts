import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentStrokeState, Point, Color, Width } from 'types';
import { endStroke } from 'modules/sharedActions';

export const initialState = {
  points: [],
  color: '#000',
  width: 5,
} as CurrentStrokeState;

export type BeginStrokeActionPayload = Point;

export type UpdateStrokeActionPayload = Point;

export type SetStrokeColorActionPayload = Color;

export type SetStrokeWidthActionPayload = Width;

export const currentStrokeSlice = createSlice({
  name: 'currentStroke',
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<BeginStrokeActionPayload>) => {
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<UpdateStrokeActionPayload>) => {
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<SetStrokeColorActionPayload>) => {
      state.color = action.payload;
    },
    setStrokeWidth: (state, action: PayloadAction<SetStrokeWidthActionPayload>) => {
      state.width = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export default currentStrokeSlice.reducer;

export const { beginStroke, updateStroke, setStrokeColor, setStrokeWidth } = currentStrokeSlice.actions;
