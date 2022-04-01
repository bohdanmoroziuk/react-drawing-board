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

export type CurrentStrokeState = Stroke;

export type StrokesState = Stroke[];

export type HistoryIndexState = HistoryIndex;

export type ModalVisibleState = {
  isShown: boolean;
  modalName: Nullable<string>;
};

export type ProjectsListState = {
  error: Nullable<string>;
  pending: boolean;
  projects: Project[];
};

export type RootState = {
  currentStroke: CurrentStrokeState;
  strokes: StrokesState;
  historyIndex: HistoryIndexState;
  modalVisible: ModalVisibleState;
  projectsList: ProjectsListState;
};
