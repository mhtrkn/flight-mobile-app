import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search, Reservation, Profile } from './screens';
import HomeStack from './TabScreens/HomeStack';
import { Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <Tab.Screen
                name="Home Stack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Octicons name="home" size={24} color={focused ? "#10A37F" : "#DDD"} />
                    ),
                }}
            />
            {/*<Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="search" size={24} color={focused ? "#10A37F" : "#DDD"} />
                    ),
                }} />
            <Tab.Screen
                name="Reservation"
                component={Reservation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="ios-notifications" size={24} color={focused ? "#10A37F" : "#DDD"} />
                    ),
                }}
            />
            */}
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user" size={24} color={focused ? "#10A37F" : "#DDD"} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
