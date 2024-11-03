import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderItem from '../components/ListItem'
import { Urunler } from '../types/products'
import { useIsFocused } from '@react-navigation/native'
const HomeScreen = () => {
    console.log('HomeScreen')
    const [urunler, setUrunler] = useState<Urunler | null>(null)
    const isFocused = useIsFocused()
    // 
    useEffect(() => {
        // console.log("useEfect")

    })



    useEffect(() => {
        getProducts()

        return () => {
            // clearInterval(interval)
        }
    }, [])
    const getProducts = () => {
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
    }
    return (
        <SafeAreaView edges={['top', 'left', 'right']}>
            <FlatList
                data={urunler || []}
                renderItem={({ item }) => <RenderItem urun={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={urun => urun.id.toString()}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

