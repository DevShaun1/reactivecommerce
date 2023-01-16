import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, isInCart: true })    
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.items.filter(
        (item) => item.id != action.payload
      )
      state.items = updatedCartItems      
    },    
  }, 
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
