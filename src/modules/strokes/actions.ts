import { Stroke, HistoryLimit } from 'types';

export const END_STROKE = 'END_STROKE';

export type EndStrokeAction = {
  type: typeof END_STROKE;
  payload: {
    stroke: Stroke;
    historyLimit: HistoryLimit;
  },
};

export type StrokesAction = EndStrokeAction;

export const endStroke = (stroke: Stroke, historyLimit: HistoryLimit): EndStrokeAction => ({
  type: 'END_STROKE',
  payload: {
    stroke,
    historyLimit,
  },
});
