import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
      console.log('====================================');
      console.log('action.payload', state.value);
      console.log('====================================');
    },
    decrement: state => {
      state.value -= 1;
      console.log('====================================');
      console.log('action.payload', state.value);
      console.log('====================================');
    },
    binhPhuong: state => {
      state.value *= state.value;
      console.log('====================================');
      console.log('action.payload', state.value);
      console.log('====================================');
    },
    multiply: {
      reducer: (state, action: PayloadAction<number>) => {
        state.value *= action.payload;
      },
      prepare: (value?: number) => ({payload: value || 2}),
    },
    resetCouter: state => {
      state.value = 0;
      console.log('====================================');
      console.log('action.payload', state.value);
      console.log('====================================');
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      console.log('====================================');
      console.log('action.payload', action.payload);
      console.log('====================================');
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, multiply, resetCouter, binhPhuong} =
  counterSlice.actions;

export default counterSlice.reducer;
