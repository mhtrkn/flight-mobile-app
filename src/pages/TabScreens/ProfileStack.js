import { createStackNavigator } from '@react-navigation/stack';
import { Home, SearchDetails } from '.';
const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search Details" component={SearchDetails} />
        </Stack.Navigator>
    );
}