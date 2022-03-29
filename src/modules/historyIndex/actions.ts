import { Stroke, UndoLimit, HistoryLimit } from 'types';

export const REDO = 'REDO';
export const UNDO = 'UNDO';
export const END_STROKE = 'END_STROKE';

export type UndoAction = {
  type: typeof UNDO;
  payload: {
    undoLimit: UndoLimit;
  };
}

export type RedoAction = {
  type: typeof REDO;
};

export type EndStrokeAction = {
  type: typeof END_STROKE;
  payload: {
    stroke: Stroke;
    historyLimit: HistoryLimit;
  };
};

export type HistoryIndexAction = 
  | UndoAction
  | RedoAction
  | EndStrokeAction;

export const undo = (undoLimit: UndoLimit): UndoAction => ({
  type: 'UNDO',
  payload: {
    undoLimit,
  },
});

export const redo = (): RedoAction => ({
  type: 'REDO',
});

export const endStroke = (stroke: Stroke, historyLimit: HistoryLimit): EndStrokeAction => ({
  type: 'END_STROKE',
  payload: {
    stroke,
    historyLimit,
  },
});
