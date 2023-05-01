import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import BottomNavigation from './src/components/Navigation';

export default  App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <BottomNavigation />
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}