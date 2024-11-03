import { create } from "zustand";
import { Urun, Urunler } from "../types/products";

interface Cart {
    productList: Urun[]
    addProduct: (product: Urun) => void
    // removeProduct: (id: number) => void
}
const cartStore = create<Cart>(set => ({
    productList: [],
    addProduct: (urun) => set((state) => ({
        productList: [...state.productList, urun]
    })),

}))

export { cartStore }