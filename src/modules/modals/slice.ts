import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalVisibleState } from 'types';

export const initialState = {
  isShown: false,
  modalName: null,
} as ModalVisibleState;

export type ShowActionPayload = ModalVisibleState['modalName'];

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<ShowActionPayload>) => {
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
