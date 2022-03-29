import { RootState } from 'types';
import { HistoryIndexAction, UNDO, REDO, END_STROKE } from 'modules/historyIndex/actions';

export type HistoryIndexState = RootState['historyIndex'];

export const reducer = (
  state: HistoryIndexState = 0,
  action: HistoryIndexAction,
): HistoryIndexState => {
  switch (action.type) {
    case UNDO: 
      return Math.min(state + 1, action.payload.undoLimit);
    case REDO:
      return Math.max(state - 1, 0);
    case END_STROKE:
      return 0;
    default:
      return state;
  }
};
