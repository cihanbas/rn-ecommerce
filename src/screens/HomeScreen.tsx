import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, item_width, padding } from '../utils/constants'

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
        <SafeAreaView edges={['top']}>
            <FlatList
                data={urunler || []}
                renderItem={({ item }) => <View style={styles.item_container}  >
                    <Image source={{ uri: item.image }} style={styles.item_image} />
                    <Text numberOfLines={2} style={styles.item_title}>
                        {item.title}
                    </Text>
                    <Text style={styles.item_price}>
                        ${item.price}
                    </Text>
                    <Text>
                        {item.rating.rate} {item.rating.count}
                    </Text>
                    <Pressable style={styles.add_cart}>
                        <Text style={styles.add_cart_text}>
                            Sepete Ekle
                        </Text>
                    </Pressable>
                </View>
                }
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={urun => urun.id.toString()}
            />



        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    item_container: {
        flex: 1,
        marginBottom: 8,
        rowGap: 8,
        margin: padding
    },
    item_image: {
        height: item_width,
        width: item_width,
        resizeMode: 'contain',
        backgroundColor: colors.white
    },
    item_title: {
        fontSize: 16,
        color: colors.primary
    }, item_price: {

        fontWeight: 'bold',
        fontSize: 16,
        color: 'green'
    }, add_cart: {
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 9

    }, add_cart_text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})