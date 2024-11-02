// Basit degiskenler
const _name: string = "cihan"
const age: number = 21
const evliMi: boolean = true
let sepettekiUrunSayisi: null | number = null
sepettekiUrunSayisi = 1
sepettekiUrunSayisi += 1

// Diziler Typescript
const notlar: number[] = [10, 22, 3, 65]
const ogrenciler: string[] = ['Cihan', "Ali", "Ersin"]

// Nesneler

type Gender = "Erkek" | "Kiz"

interface Ogrenci {
    adi: string
    soyadi: string
    yas: number
    servisKullaniyormu: boolean
    devamsizlikDurumu?: number
    cinsiyet: Gender
}


const ogrenci: Ogrenci = {
    adi: "cihan",
    soyadi: "BAS",
    yas: 21,
    servisKullaniyormu: true,
    devamsizlikDurumu: 1,
    cinsiyet: 'Erkek'

}

const ogrenci2: Ogrenci = {
    adi: "mehmet",
    soyadi: 'ters',
    yas: 32,
    servisKullaniyormu: false,
    cinsiyet: 'Kiz',

}


type Animal = {
    renk: string
    ayakSayisi: number
    yasadigiYer: "Hava" | 'Kara' | 'Su'
    isim: string
}

const aslan: Animal = {
    renk: "sari",
    ayakSayisi: 4,
    yasadigiYer: 'Kara',
    isim: 'Aslan'
}
const animals: Animal[] = [
    {
        renk: "Siyah",
        isim: 'Kopek',
        yasadigiYer: "Kara",
        ayakSayisi: 4
    }, aslan
]

// Foksiyonlar

const topla = (sayi1: number, sayi2: number): number => {
    return sayi1 + sayi2
}
topla(43, 32)

function adSoyadBirlestir(ad: string, soyad: string): string {
    return ad + ' ' + soyad
}
// eger tek satir kod olacaksa return yazmaniza gerek yok 
// const topla2 = (sayi1, sayi2) => sayi1 + sayi2
