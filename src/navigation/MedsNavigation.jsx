import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllMedsScreen from '../Screens/AllMedsScreen';
import ViewMedScreen from '../Screens/ViewMedScreen';
import EditMedScreen from '../Screens/EditMedScreen';

import screenStyles from '../Screens/screenStyles';
import styles from './styles';

const MedsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerTitleStyle: screenStyles.headerTitleStyle,
    }}>
      <Stack.Screen name="AllMeds" component={AllMedsScreen} />
      <Stack.Screen name="ViewMed" component={ViewMedScreen}
        options={({route}) => ({title: route.params.med.name})} 
      />
      <Stack.Screen name="EditMed" component={EditMedScreen}
        options={({route}) => ({title: 'Edit '+ route.params.med.name})} 
      />
    </Stack.Navigator>
  );
}

export default MedsNavigation;
