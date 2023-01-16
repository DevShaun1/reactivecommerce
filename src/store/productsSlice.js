import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  status: 'idle',
  count: 0
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
 
    return data
  }
)

export const productsSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    toggleIsProductInCart: (state, action) => {
      const product = state.items.find((item) => action.payload === item.id)
      product.isInCart = !product.isInCart
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const data = action.payload
        state.status = "succeeded"
        state.count = Object.keys(data).length

        const products = data
          ? data.map((product) => {
              return {
                ...product,
                rating: product.rating.rate,
                count: product.rating.count,
                isInCart: false,
              }
            })
          : []
        
        state['items'] = [ ...products ]
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { toggleIsProductInCart } = productsSlice.actions
export default productsSlice.reducer
