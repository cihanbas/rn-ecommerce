import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { cartStore } from '../store/sepetStore'

const CartScreen = () => {
    const urunListesi = cartStore(s => s.productList)

    return (
        <SafeAreaView>
            {urunListesi.map((urun, index) => <Text key={urun.id.toString()}>
                {index + 1} {urun.title}
            </Text>)}
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})