import { Text, View, Image, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Reminders from '../../Screens/Reminders';
import AddMedForm from '../../Screens/AddMedForm';
import MedsArchive from '../../Screens/MedsArchive';

import styles from './styles';
import Settings from '../../Screens/Settings';
import AllMeds from '../../Screens/AllMeds';

const CustomAddButton = ({children, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.addButton}>
      <View>{children}</View>
    </TouchableHighlight>
  );
};

export default BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.navContainer,
          ...styles.shadow
        },
      }}
    >
      <Tab.Screen name="Scheduled / Next" component={Reminders} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../../assets/icons/meds.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', ...styles.navText}}>Scheduled</Text>
          </View>
        )
      }} />
      <Tab.Screen name="All Medicine" component={AllMeds} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../../assets/icons/all.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', ...styles.navText}}>All Meds</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Add" component={AddMedForm} options={{
        tabBarIcon: ({focused}) => (
          <Image 
            source={require('../../assets/icons/add.png')}
            resizeMode={'contain'}
            style={{
              width: 40,
              height: 40,
              tintColor: '#fff'
            }}
          />
        ),
        tabBarButton: (props) => (<CustomAddButton {...props} />)
      }} />
      <Tab.Screen name="History" component={MedsArchive} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../../assets/icons/history.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', ...styles.navText}}>History</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../../assets/icons/settings.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? '#e32f45' : '#748c94'
              }}
            />
            <Text style={{color: focused ? '#e32f45' : '#748c94', ...styles.navText}}>Settings</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}