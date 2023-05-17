import { Text, View, Image, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';

import ScheduledScreen from '../Screens/ScheduledScreen';
import AllMedsScreen from '../Screens/AllMedsScreen';
import AddScreen from '../Screens/AddScreen';
import MedsArchiveScreen from '../Screens/MedsArchiveScreen';
import SettingsScreen from '../Screens/SettingsScreen';

import colors from '../constants/colors';

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
          ...styles.shadow,
          ...styles.navContainer
        },
      }}
    >
      <Tab.Screen name="Scheduled / Next" component={ScheduledScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/meds.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : '#748c94'
              }}
            />
            <Text style={{color: focused ? colors.actionColor : '#748c94', ...styles.navText}}>Scheduled</Text>
          </View>
        )
      }} />
      <Tab.Screen name="All Medicine" component={AllMedsScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/all.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : '#748c94'
              }}
            />
            <Text style={{color: focused ? colors.actionColor : '#748c94', ...styles.navText}}>All Meds</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Add" component={AddScreen} options={{
        tabBarIcon: ({focused}) => (
          <Image 
            source={require('../assets/icons/add.png')}
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
      <Tab.Screen name="History" component={MedsArchiveScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/history.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : '#748c94'
              }}
            />
            <Text style={{color: focused ? colors.actionColor : '#748c94', ...styles.navText}}>History</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/settings.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : '#748c94'
              }}
            />
            <Text style={{color: focused ? colors.actionColor : '#748c94', ...styles.navText}}>Settings</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}