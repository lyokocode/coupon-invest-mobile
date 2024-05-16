import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Explore, Home, Favorite } from "./screens"
import { GlobeAltIcon, HeartIcon, HomeIcon } from 'react-native-heroicons/outline';

const Tab = createBottomTabNavigator();

function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#22c55e",
                tabBarInactiveTintColor: "#27272a",
                tabBarStyle: {
                    borderWidth: 0,
                }
            }}
        >
            <Tab.Screen name="Anasayfa" component={Home}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <HomeIcon size={30} color={color} />
                        }
                        return <HomeIcon size={30} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Keşfet" component={Explore}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <GlobeAltIcon size={30} color={color} />
                        }
                        return <GlobeAltIcon size={30} color={color} />
                    }
                }}
            />
            <Tab.Screen name="Favoriler" component={Favorite}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused) {
                            return <HeartIcon size={32} color="red" />
                        }
                        return <HeartIcon size={30} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )

}

export default Screens