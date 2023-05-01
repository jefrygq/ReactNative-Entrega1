import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reminders from '../../Screens/Reminders';
import AddMedForm from '../../Screens/AddMedForm';
import MedsArchive from '../../Screens/MedsArchive';

export default BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Reminders" component={Reminders} />
      <Tab.Screen name="Meds" component={Reminders} />
      <Tab.Screen name="Add" component={AddMedForm} />
      <Tab.Screen name="History" component={MedsArchive} />
      <Tab.Screen name="Settings" component={Reminders} />
    </Tab.Navigator>
  );
}