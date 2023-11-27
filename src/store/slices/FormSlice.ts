import { createSlice } from '@reduxjs/toolkit';
import { SelectElement, TextInput } from '../../components/FormElements';

const initialState = {
  builderElements: [TextInput, SelectElement],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
});

export default formSlice.reducer;

export const {} = formSlice.actions;
