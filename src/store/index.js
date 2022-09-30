import { configureStore, createSlice } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterSlice.reducer,
  },
});

export default store;
