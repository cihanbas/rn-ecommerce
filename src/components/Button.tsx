import { Pressable, StyleSheet, Text } from "react-native"
import { colors, padding } from "../utils/constants"
interface IButton {
    text: string
}
const Button = ({ text }: IButton) => {
    return <Pressable style={styles.add_cart}>
        <Text style={styles.add_cart_text}>
            {text}
        </Text>
    </Pressable>
}
export default Button
const styles = StyleSheet.create({
    add_cart: {
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 9

    }, add_cart_text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})
