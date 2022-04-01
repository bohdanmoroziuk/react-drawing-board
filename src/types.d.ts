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

export type Project = {
  image: string;
  name: string;
  id: string
}

export type RootState = {
  currentStroke: Stroke;
  strokes: Stroke[];
  historyIndex: HistoryIndex;
  modalVisible: {
    isShown: boolean;
    modalName: Nullable<string>;
  };
  projectsList: {
    error: Nullable<string>;
    pending: boolean;
    projects: Project[];
  };
};
