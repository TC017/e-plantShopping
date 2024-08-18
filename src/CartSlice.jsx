import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
    numOfItems: 0, // Initialize numOfItems as 0
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.numOfItems++; // Increment numOfItems
    },

    removeItem: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (itemToRemove) {
        state.numOfItems -= itemToRemove.quantity;
      }
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },

    incQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
        state.numOfItems++; // Increment numOfItems
      }
    },
    decQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate && itemToUpdate.quantity > 0) {
        itemToUpdate.quantity--;
        state.numOfItems--; // Decrement numOfItems
      }
    },
  },
});

export const { addItem, removeItem, incQuantity, decQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
