import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from 'types';

export type ModalState = {
  isShown: boolean;
  modalName: Nullable<string>;
};

export const initialState = {
  isShown: false,
  modalName: null,
} as ModalState;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.isShown = true;
      state.modalName = action.payload;
    },
    hide: (state) => {
      state.isShown = false;
      state.modalName = null;
    },
  },
});

export const modalVisible = modalSlice.reducer;

export const { show, hide } = modalSlice.actions;
