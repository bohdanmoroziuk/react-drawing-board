import { Point, Stroke } from 'types';

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
};

export type SetStrokeColorAction = {
  type: typeof SET_STROKE_COLOR;
  payload: {
    color: Stroke['color'],
  },
};

export type Action = 
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

export const endStroke = (): EndStrokeAction => ({
  type: 'END_STROKE',
});

export const setStrokeColor = (color: Stroke['color']): SetStrokeColorAction => ({
  type: 'SET_STROKE_COLOR',
  payload: {
    color,
  },
});
