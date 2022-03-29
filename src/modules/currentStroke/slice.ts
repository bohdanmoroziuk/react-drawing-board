import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, Point, Color } from 'types';
import { endStroke } from 'modules/sharedActions';

export type CurrentStrokeState = RootState['currentStroke'];

export const initialState: CurrentStrokeState = {
  points: [],
  color: '#000',
};

export type BeginStrokeActionPayload = {
  point: Point;
};

export type UpdateStrokeActionPayload = {
  point: Point;
};

export type SetStrokeColorActionPayload = Color

export const currentStrokeSlice = createSlice({
  name: 'currentStroke',
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<BeginStrokeActionPayload>) => {
      state.points = [action.payload.point];
    },
    updateStroke: (state, action: PayloadAction<UpdateStrokeActionPayload>) => {
      state.points.push(action.payload.point);
    },
    setStrokeColor: (state, action: PayloadAction<SetStrokeColorActionPayload>) => {
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});

export default currentStrokeSlice.reducer;

export const { beginStroke, updateStroke, setStrokeColor } = currentStrokeSlice.actions;
