import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

const themeBgSlice = createSlice({
  name: 'themeBG',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    changeBgColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeBgColor } = themeBgSlice.actions;

export default themeBgSlice.reducer;
