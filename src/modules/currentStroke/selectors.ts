import { RootState } from 'types';

export const currentStrokeSelector = (state: RootState) => state.currentStroke;

export const currentStrokeWidthSelector = (state: RootState) => state.currentStroke.width;
