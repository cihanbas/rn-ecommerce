import { Dimensions } from "react-native"
import { ItemUrun, Urunler } from "../types/products"

const width = Dimensions.get('screen').width
const padding = 12
const item_width = width / 2 - padding * 2
const colors = {
    yellow: 'yellow',
    primary: '#007',
    text: '#000',
    backgroundColor: '#ddd',
    white: '#fff',
    inactive: '#bbb'
}

const sepetListesi: Urunler = []




export {
    width, padding, item_width, colors,
    sepetListesi
}