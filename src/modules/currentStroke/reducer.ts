import { RootState } from 'types';
import {
  CurrentStrokeAction,
  BEGIN_STROKE,
  END_STROKE,
  UPDATE_STROKE,
  SET_STROKE_COLOR,
} from 'modules/currentStroke/actions';

export type CurrentStrokeState = RootState['currentStroke'];

export const initialState: CurrentStrokeState = {
  points: [],
  color: '#000',
};

export const reducer = (
  state = initialState,
  action: CurrentStrokeAction,
): CurrentStrokeState => {
  switch (action.type) {
    case BEGIN_STROKE: 
      return {
        ...state,
        points: [action.payload.point],
      };
    case UPDATE_STROKE: 
      return {
        ...state,
        points: [...state.points, action.payload.point],
      };
    case END_STROKE: 
      return {
        ...state,
        points: [],
      };
    case SET_STROKE_COLOR: 
      return {
        ...state,
        color: action.payload.color,
      };
    default:
      return state;
  }
};
