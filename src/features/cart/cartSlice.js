import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    updateDate: "",
  },
  reducers: {
    addItemCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const itemFound = state.items.find((item) => item.id === id);
      itemFound ? itemFound.quantity++ : state.items.push(action.payload);
      state.total += price * quantity;
    },
    clearCart: (state) => {
      (state.items = []), (state.total = 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
