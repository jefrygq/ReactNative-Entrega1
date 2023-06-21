import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import BottomNavigation from './BottomNavigation';
import { useSelector } from 'react-redux';
import { View } from 'react-native';


const MainNavigation = () => {
  const userId = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {userId ? <BottomNavigation /> : <AuthNavigation />}
      </View>
    </NavigationContainer>
  );
}

export default MainNavigation;
