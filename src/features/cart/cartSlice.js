import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartData from '../../data/cartData';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  items: [],
  amount: 4,
  total: 0,
  loading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.amount++;
    },
    decrease(state, action) {
      console.log(action);
      const item = state.items.find((item) => item.id === action.payload.id);
      item.amount--;
    },
    removeItem(state, action) {
      const filteredArray = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = filteredArray;
    },
    clearCart(state) {
      state.items = [];
    },
    calculateTotal(state, action) {
      let sum = 0;
      state.items.map((item) => {
        sum += item.price * item.amount;
      });
      state.total = sum;
      state.amount = state.items.length;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.loading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.items = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
