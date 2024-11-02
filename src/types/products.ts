export interface Urun {
    "id": number,
    "title": string
    "price": number
    "description": string
    "category": string
    "image": string
    "rating": {
        "rate": number
        "count": number
    }
}
export type Urunler = Urun[]
export type ItemUrun = { urun: Urun }