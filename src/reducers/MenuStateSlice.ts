import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface MenuState {
  status: 'opened' | 'closed';
}

const initialState: MenuState = {
  status: 'opened'
};

export const menuStateSlice = createSlice({
  name: 'menustate',
  initialState,
  reducers: {
    open: (state) => {
      state.status = 'opened';
    },
    close: (state) => {
      state.status = 'closed';
    },
  },
});

export const { open, close } = menuStateSlice.actions;

export const selectMenuStatus = (state: RootState) => state.menustate;

export default menuStateSlice.reducer;