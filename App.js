import { NavigationContainer } from '@react-navigation/native';
import Screens from "./src/Screens"
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Screens />
      </SafeAreaView>
    </NavigationContainer>
  );
}


