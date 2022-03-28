export type RootState = {};

export type Action = {
  type: string;
};

export const rootReducer = (
  state: RootState = {},
  action: Action,
): RootState => {
  return state;
};
