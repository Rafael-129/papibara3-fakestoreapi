import { create } from "zustand";
import { getProducts } from "../services/products.service";
import { fakestoreapi } from "../utils/products.utils";

export const useProductsStore = create((set) => ({
  products: [],
  getProducts: async () => {
    const products = await getProducts();
    set({ products: products.map(fakestoreapi) });
  }
}));