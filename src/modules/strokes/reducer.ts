import { RootState } from 'types';
import { StrokesAction, END_STROKE } from 'modules/strokes/actions';

export type StrokesState = RootState['strokes'];

export const reducer = (
  state: StrokesState = [],
  action: StrokesAction,
): StrokesState => {
  switch (action.type) {
    case END_STROKE:
      const { stroke, historyLimit } = action.payload;

      if (!stroke.points.length) {
        return state;
      }

      return [
        ...(state.slice(0, state.length - historyLimit)),
        stroke,
      ];
    default:
      return state;
  }
}