import { Point, Stroke, Color, HistoryLimit } from 'types';

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const END_STROKE = 'END_STROKE';
export const SET_STROKE_COLOR = 'SET_STROKE_COLOR';

export type BeginStrokeAction = {
  type: typeof BEGIN_STROKE;
  payload: {
    point: Point;
  };
};

export type UpdateStrokeAction = {
  type: typeof UPDATE_STROKE;
  payload: {
    point: Point;
  };
};

export type EndStrokeAction = {
  type: typeof END_STROKE;
  payload: {
    stroke: Stroke;
    historyLimit: HistoryLimit;
  };
};

export type SetStrokeColorAction = {
  type: typeof SET_STROKE_COLOR;
  payload: {
    color: Color;
  };
};

export type CurrentStrokeAction = 
  | BeginStrokeAction
  | UpdateStrokeAction
  | EndStrokeAction
  | SetStrokeColorAction;

export const beginStroke = (x: Point['x'], y: Point['y']): BeginStrokeAction => ({
  type: 'BEGIN_STROKE',
  payload: {
    point: {
      x,
      y,
    },
  },
});

export const updateStroke = (x: Point['x'], y: Point['y']): UpdateStrokeAction => ({
  type: 'UPDATE_STROKE',
  payload: {
    point: {
      x,
      y,
    },
  },
});

export const endStroke = (stroke: Stroke, historyLimit: HistoryLimit): EndStrokeAction => ({
  type: 'END_STROKE',
  payload: {
    stroke,
    historyLimit,
  },
});

export const setStrokeColor = (color: Color): SetStrokeColorAction => ({
  type: 'SET_STROKE_COLOR',
  payload: {
    color,
  },
});
