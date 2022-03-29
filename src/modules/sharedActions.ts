import { createAction } from '@reduxjs/toolkit';

import { Stroke, HistoryLimit } from 'types';

export type EndStrokeActionPayload = {
  stroke: Stroke;
  historyLimit: HistoryLimit;
};

export const endStroke = createAction<EndStrokeActionPayload>('endStroke');
