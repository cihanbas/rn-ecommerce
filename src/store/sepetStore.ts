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


// const ogrenci = {
//     isim: "Mehmet",
//     soyIsim: "Ahmet",
//     adres: 'ankara'
// }
// // const isim = ogrenci.isim
// // const soyIsim = ogrenci.soyIsim

// const { isim, soyIsim, adres } = ogrenci