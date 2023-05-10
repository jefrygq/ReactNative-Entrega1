import { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

import BottomNavigation from './src/components/Navigation';
import LoginPage from './src/Screens/LoginPage';

export default  App = () => {
  const [isUserLogged, setIsUserLoggedIn] = useState(false);

  let [fontsLoaded] = useFonts ({
    'Quicksand-Regular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./src/assets/fonts/Quicksand-Medium.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
