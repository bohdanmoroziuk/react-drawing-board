import { RootState } from 'types';

export const strokesSelector = (state: RootState) => state.strokes;

export const strokesLengthSelector = (state: RootState) => state.strokes.length;
