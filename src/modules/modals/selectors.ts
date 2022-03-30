import { RootState } from 'types';

export const modalNameSelector = (state: RootState) => state.modalVisible.modalName;
