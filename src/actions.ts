import { Point } from 'types';

export const BEGIN_STROKE = 'BEGIN_STROKE';
export const UPDATE_STROKE = 'UPDATE_STROKE';
export const END_STROKE = 'END_STROKE';

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

export type Action = 
  | BeginStrokeAction
  | UpdateStrokeAction
  | EndStrokeAction;

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
