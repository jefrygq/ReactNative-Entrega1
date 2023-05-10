import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import BottomNavigation from './src/components/Navigation';
import LoginPage from './src/Screens/LoginPage';

export default  App = () => {
  const [isUserLogged, setIsUserLoggedIn] = useState(false);

  let content = <NavigationContainer>
    <BottomNavigation />
    <StatusBar style="auto" />
  </NavigationContainer>;

  if(!isUserLogged) {
    content = <LoginPage setIsUserLoggedIn={setIsUserLoggedIn} />
  }

  return (
    <View style={{flex: 1}}>
      {content}
    </View>
  );
}
