import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from "./src/Screens"

export default function App() {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
}


