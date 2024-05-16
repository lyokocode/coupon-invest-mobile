import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login } from "./screens"

const Tab = createBottomTabNavigator();

function Screens() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    )

}

export default Screens