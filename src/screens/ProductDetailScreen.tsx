import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../components/Button'

const ProductDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const { urun } = route.params
    const navigateToSearch = () => {
        navigation.navigate('Tabs', { screen: 'Search' })
        // 
    }
    return (
        <View>
            <Text>{urun.title}</Text>
            <Button text='go to search' onClick={navigateToSearch}></Button>
            {/* <Button text='go to search' onClick={() => navigateToSearch()}></Button> */}
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})