import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formSlice from './slices/FormSlice';

const rootReducer = combineReducers({
  formSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
