import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice += newItem.price * newItem.quantity;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          title: newItem.title,
        });
      } else {
        existingItem.quantity += newItem.quantity;
      }
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
