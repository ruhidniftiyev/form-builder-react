import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormElement } from '../../models/IFormElement';

interface IFormState {
  selectedElementId: string | undefined;
  content: IFormElement[];
}

const initialState: IFormState = {
  selectedElementId: '',
  content: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addElementToContent: (state, action: PayloadAction<IFormElement>) => {
      state.content = [...state.content, action.payload];
    },
    removeElementFromContent: (state, action: PayloadAction<string>) => {
      console.log([...state.content]);
      state.content = state.content.filter(
        (formElement: IFormElement) => formElement.id !== action.payload,
      );
      if (action.payload === state.selectedElementId) {
        state.selectedElementId = state.content[state.content.length-1].id;
      }
    },
    editElementInContent: (state, action: PayloadAction<any>) => {
      state.content = state.content.map((el: any) =>
        el.id === state.selectedElementId ? { ...el, settings: action.payload } : el,
      );
    },
    isSelected: (state, action: PayloadAction<string>) => {
      state.selectedElementId = action.payload;
    },
  },
});

export default formSlice.reducer;

export const { addElementToContent, removeElementFromContent, editElementInContent, isSelected } =
  formSlice.actions;
