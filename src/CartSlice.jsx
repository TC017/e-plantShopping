import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const { name, image, cost } = action.payload;
    const existingItem = state.items.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.items.push({ name, image, cost, quantity: 1 });
    }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    incQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
        itemToUpdate.quantity++;
        }
    
    },
    decQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            if (itemToUpdate.quantity > 0) {
        itemToUpdate.quantity--;
        }
        if (itemToUpdate.quantity === 0) {
            state.items = state.items.filter(item => item.name !== name);
        }
        }
    
    },

  },
});

export const { addItem, removeItem, incQuantity, decQuantity } = CartSlice.actions;

export default CartSlice.reducer;
