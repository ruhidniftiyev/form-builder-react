import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormElement } from '../../models/IFormElement';

interface IFormState {
  content: IFormElement[];
}

const initialState: IFormState = {
  content: [
    // {
    //   id: 1,
    //   element: 'input',
    //   settings: {
    //     type: 'text',
    //     placeholder: 'Your name',
    //   },
    // },
    // {
    //   id: 2,
    //   element: 'input',
    //   settings: {
    //     type: 'text',
    //     placeholder: 'Your surname',
    //   },
    // },
    // {
    //   id: 3,
    //   element: 'input',
    //   settings: {
    //     type: 'number',
    //     placeholder: 'Your age',
    //   },
    // },
  ],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addElementToContent: (state, action: PayloadAction<IFormElement>) => {
      state.content = [...state.content, action.payload];
    },
  },
});

export default formSlice.reducer;

export const { addElementToContent } = formSlice.actions;
