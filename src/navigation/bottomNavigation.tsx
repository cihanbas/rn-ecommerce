import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { cartStore } from "../store/sepetStore";
import { colors } from "../utils/constants";
const Tabs = createBottomTabNavigator()
const BottomNavigation = () => {
    const productList = cartStore(s => s.productList)
    return <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.inactive,
        tabBarActiveTintColor: colors.primary,
        // tabBarShowLabel: false
    }} >
        <Tabs.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, }) => <AntDesign name="home" size={24} color={color} />

        }} />
        <Tabs.Screen name="Search" component={SearchScreen}
            options={{
                tabBarIcon: ({ color, }) => <AntDesign name="search1" size={24} color={color} />

            }} />
        <Tabs.Screen name="Cart" component={CartScreen}
            options={{
                tabBarIcon: ({ color, }) => {
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

}
export default BottomNavigation