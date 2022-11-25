import {createSlice} from "@reduxjs/toolkit"
import { act } from "@testing-library/react"
import { omit } from "lodash"

type ProductsInCartState = {
  [id:number] : number
}

export const initialState:ProductsInCartState = {
  1: 1,
  2: 1
}

export const cartSlice = createSlice({
  name: "productsInCart",
  initialState, 
  reducers: {
    addProductToCart: (prevState, action) => ({
      ...prevState, [action.payload.id] : (prevState[action.payload.id] || 0) + action.payload.count
    }),
    removeProductFromCart: (prevState, action) => omit(prevState, action.payload),
    changeProductQuantity: (prevState, action) => ({
      ...prevState,
    [action.payload.id] : action.payload.count
    })
  }
})

export const { addProductToCart, removeProductFromCart, changeProductQuantity } =
    cartSlice.actions

export default cartSlice.reducer 