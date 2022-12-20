import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }
    },

    deleteItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
