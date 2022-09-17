import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isChecked: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const cartItem = state.cartItems[0];
      cartItem.count = cartItem.count + 1;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.count = cartItem.count - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.count;
        total += item.count * item.currPrice;
      });
      state.amount = amount;
      state.total = total;
    },
    checkOut: (state) => {
      if (state.amount > 0) {
        state.isChecked = true;
      } else {
        state.isChecked = false;
      }
    },
  },
});

export const { increment, decrement, calculateTotals, checkOut } =
  cartSlice.actions;
export default cartSlice.reducer;
