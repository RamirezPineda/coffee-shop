import { createContext } from "react";

interface Cart {
  id: number;
  name: string;
  price: number;
}

const initialState: Cart[] = [];

export const cartContext = createContext(initialState);
