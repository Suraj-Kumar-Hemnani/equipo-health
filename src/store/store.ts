import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menustateReducer from 'reducers/MenuStateSlice';

export const store = configureStore({
  reducer: {
    menustate: menustateReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
