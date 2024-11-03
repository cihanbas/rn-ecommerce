import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../utils/constants";
import { cartStore } from "../store/sepetStore";
const Tabs = createBottomTabNavigator()
const BottomNavigation = () => {
    const productList = cartStore(s => s.productList)
    return <NavigationContainer>
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: colors.inactive,
            tabBarActiveTintColor: colors.primary,
            // tabBarShowLabel: false
        }} >
            <Tabs.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, focused, size }) => {
                    return <AntDesign name="home" size={24} color={color} />
                }

            }} />
            <Tabs.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <AntDesign name="search1" size={24} color={color} />
                    },
                }} />
            <Tabs.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarIcon: ({ color, focused, size }) => {
                        return <AntDesign name="shoppingcart" size={24} color={color} />
                    },
                    tabBarBadge: productList.length

                }} />
            <Tabs.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, }) => {
                        return <AntDesign name="user" size={24} color={color} />
                    },
                }} />
        </Tabs.Navigator>
    </NavigationContainer>
}
export default BottomNavigation