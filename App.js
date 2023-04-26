import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import AddMedForm from './src/components/AddMedForm/AddMedForm';
import MainNavigation from './src/components/MainNavigation/MainNavigation';
import Reminders from './src/components/Reminders/Reminders';

export default  App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reminders">
        <Stack.Screen name="Reminders" component={Reminders} />
        <Stack.Screen name="AddMedicine" component={AddMedForm} />
      </Stack.Navigator>
      <MainNavigation /> 
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}