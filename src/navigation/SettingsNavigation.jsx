import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/ProfileScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';

import screenStyles from '../Screens/screenStyles';
import SettingsScreen from '../Screens/SettingsScreen';

const SettingsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerTitleStyle: screenStyles.headerTitleStyle,
    }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

export default SettingsNavigation;
