import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { cartStore } from "../store/sepetStore"
import { ItemUrun } from "../types/products"
import { colors, item_width, padding } from "../utils/constants"
import Button from "./Button"
import { useNavigation } from "@react-navigation/native"
const RenderItem = ({ urun }: ItemUrun) => {

    const navigation = useNavigation()
    const { addProduct, productList } = cartStore(s => s)
    const sepeteEkle = () => {
        const isExist = productList.find(u => u.id == urun.id)
        if (isExist) {
            alert('urun zaten sepette var')
        } else {
            addProduct(urun)
        }
    }
    const navigateToDetail = () => {
        navigation.navigate('ProductDetail', { urun })
    }
    return <Pressable style={styles.item_container} onPress={() => navigateToDetail()} >
        <Image source={{ uri: urun.image }} style={styles.item_image} />
        <Text numberOfLines={2} style={styles.item_title}>
            {urun.title}
        </Text>
        <View style={styles.item_price_rate}>
            <Text style={styles.item_price}>
                ${urun.price}
            </Text>
            <Text>
                {urun.rating.count} {urun.rating.rate}
            </Text>
        </View>
        <Button text='Sepete Ekle' onClick={() => sepeteEkle()} />
    </Pressable>
}
export default RenderItem

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
    },
    item_price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green'
    },
    item_price_rate: {
        flexDirection: 'row', justifyContent: 'space-between',
        alignItems: 'center'
    }

})
