export type Nullable<T> = T | null;

export type Color = string;

export type UndoLimit = number;

export type HistoryLimit = number;

export type HistoryIndex = number;

export type Point = {
  x: number;
  y: number;
}

export type Stroke = {
  points: Point[];
  color: Color;
}

export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
  historyIndex: HistoryIndex;
  modalVisible: {
    isShown: boolean;
    modalName: Nullable<string>;
  };
};
