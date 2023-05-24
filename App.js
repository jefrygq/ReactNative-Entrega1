import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";

import BottomNavigation from './src/navigation/BottomNavigation';
import LoginScreen from './src/Screens/LoginScreen';

export default  App = () => {
  const [isUserLogged, setIsUserLoggedIn] = useState(false);

  let [fontsLoaded] = useFonts ({
    'Quicksand-Regular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./src/assets/fonts/Quicksand-Medium.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  let content = <NavigationContainer>
    <BottomNavigation />
  </NavigationContainer>;

  if(!isUserLogged) {
    content = <LoginScreen setIsUserLoggedIn={setIsUserLoggedIn} />
  }

  return (
    <View style={{flex: 1}}>
      {content}
    </View>
  );
}
