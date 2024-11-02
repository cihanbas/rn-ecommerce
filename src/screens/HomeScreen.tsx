import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Urun {
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
type Urunler = Urun[]

const HomeScreen = () => {
    const [urunler, setUrunler] = useState<Urunler | null>(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(products => {
            return products.json()
        }).then((products) => {
            const response = products as Urunler
            if (response.length > 0) {
                setUrunler(response)
            }
        }).catch(er => {
            console.log('er', er)
        })

    }, [])

    return (
        <SafeAreaView>
            {urunler && urunler.map(urun => {
                return <Text key={urun.id}>
                    {urun.description}
                </Text>
            })}
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})