import { createSlice } from '@reduxjs/toolkit';

const initialStateCart = {
  cart: [

  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    // Action to add an item to the cart or increase the quantity if it already exists
    addItem(state, action) {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If item exists, increase quantity
        state.cart[itemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        const newItem = { ...action.payload, quantity: 1 };
        state.cart.push(newItem);
      }
    },

    // Action to remove an item from the cart
    removeItem(state, action) {
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.cart.splice(index, 1);
      }
    },

    // Action to update the quantity of an item in the cart
    updateQuantity(state, action) {
        
        const index = state.cart.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
            state.cart[index].quantity = action.payload.quantity;
            state.cart[index].totalPrice = state.cart[index].unitPrice * action.payload.quantity;  // Also update total price if needed
        }
    },

    // Action to clear the entire cart
    clearCart(state) {
      state.cart = [];
    }
  }
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Default export the reducer from this slice
export default cartSlice.reducer;
