import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store';

import BottomNavigation from './src/navigation/BottomNavigation';
import LoginScreen from './src/Screens/LoginScreen';

export default App = () => {
  const [isUserLogged, setIsUserLoggedIn] = useState(false);
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./src/assets/fonts/Quicksand-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  <Provider store={store}>
    <NavigationContainer>
    <View style={{ flex: 1 }}>
      {isUserLogged ? (
      <BottomNavigation />
      ) : (
      <LoginScreen setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </View>
    </NavigationContainer>
  </Provider>
  );
};