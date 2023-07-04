import { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllMedsScreen from '../Screens/AllMedsScreen';
import ViewMedScreen from '../Screens/ViewMedScreen';
import EditMedScreen from '../Screens/EditMedScreen';

import screenStyles from '../Screens/screenStyles';
import styles from './styles';

const MedsNavigation = ({route, navigation}) => {
  const Stack = createNativeStackNavigator();

  useLayoutEffect(() => {
    const tabHiddenRoutes = ["ViewMed","EditMed"];

    if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {...styles.shadow, ...styles.navContainer,}});
    }
}, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{
      headerTitleStyle: screenStyles.headerTitleStyle,
      headerTitleAlign: "center"
    }}>
      <Stack.Screen name="AllMeds" options={{title: 'All Medications'}} component={AllMedsScreen} />
      <Stack.Screen name="ViewMed" component={ViewMedScreen}
        options={({route}) => ({
          title: route.params.med.name,
        })} 
      />
      <Stack.Screen name="EditMed" component={EditMedScreen}
        options={({route}) => ({
          title: 'Edit '+ route.params.med.name,
        })} 
      />
    </Stack.Navigator>
  );
}

export default MedsNavigation;
