import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNavigation from "./bottomNavigation"
import ProductDetailScreen from "../screens/ProductDetailScreen"
const Stack = createNativeStackNavigator()
const MainNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            animation: 'fade_from_bottom',
            // presentation: 'formSheet'

        }}>
            <Stack.Screen name="Tabs" component={BottomNavigation} options={{ headerShown: false, animation: 'fade_from_bottom' }} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default MainNavigation