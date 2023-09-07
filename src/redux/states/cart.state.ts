import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../interfaces/product.interface";
import { Cart } from "../../interfaces/cart.interface";

const EmpyCartState: Cart[] = [];

const persistLocalStorageCart = (cart: Cart[]) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

const clearLocalStorageCart = () => {
  window.localStorage.removeItem("cart");
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? (JSON.parse(localStorage.getItem("cart") as string) as Cart[])
    : EmpyCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.push(action.payload);
      persistLocalStorageCart(state);
    },
    addOneProduct: (state, action: PayloadAction<Product>) => {
      const productFound = state.find(
        (product) => product.id == action.payload.id
      );

      if (productFound) {
        productFound.quantity++;
        persistLocalStorageCart(state);
      }
    },
    removeOneProduct: (state, action: PayloadAction<Product>) => {
      const productFound = state.find(
        (product) => product.id === action.payload.id
      );

      if (productFound && productFound.quantity > 1) {
        productFound.quantity--;
        persistLocalStorageCart(state);
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productFound = state.find(
        (product) => product.id === action.payload
      );

      if (productFound) {
        const indexProduct = state.indexOf(productFound);
        state.slice(indexProduct, 1);
        persistLocalStorageCart(state);
      }
    },
    clearCart: () => {
      clearLocalStorageCart();
      return EmpyCartState;
    },
  },
});

export const {
  addToCart,
  addOneProduct,
  removeOneProduct,
  removeProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
