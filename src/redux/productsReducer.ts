import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}


export const initialState: Product[] = []

export const fetchProducts = createAsyncThunk<Product[], undefined>(
    "products/fetchProduct",
    async () => {
        const res = await axios.get(
            "https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6"
        )

        return res.data.products
    }
)

export const productsSlice = createSlice ({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return state = action.payload
  
})    
  }
})

export default productsSlice.reducer