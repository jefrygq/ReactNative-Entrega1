import { Text, View, Image, TouchableHighlight, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../constants/colors';
import screenStyles from '../Screens/screenStyles';
import styles from './styles';

import ScheduledScreen from '../Screens/ScheduledScreen';
import EditMedScreen from '../Screens/EditMedScreen';
import MedsArchiveScreen from '../Screens/MedsArchiveScreen';

import SettingsNavigation from '../navigation/SettingsNavigation';
import MedsNavigation from './MedsNavigation';
import { useEffect, useState } from 'react';


export default BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  const CustomAddButton = ({children, onPress}) => {
    return (
      <TouchableHighlight onPress={onPress} style={styles.addButton}>
        <View>{children}</View>
      </TouchableHighlight>
    );
  };

  const [keyboardShown, setKeyboardShown] = useState();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShown(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.shadow,
          ...styles.navContainer,
          ...(keyboardShown && styles.hiddenNav)
        },
        headerTitleStyle: screenStyles.headerTitleStyle,
        headerTitleAlign: "center"
      }}
    >
      <Tab.Screen name="Upcoming" component={ScheduledScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/meds.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : colors.tertiary
              }}
            />
            <Text style={{color: focused ? colors.actionColor : colors.tertiary, ...styles.navText}}>Scheduled</Text>
          </View>
        )
      }} />
      <Tab.Screen name="MedsNavigation" component={MedsNavigation} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/all.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : colors.tertiary
              }}
            />
            <Text style={{color: focused ? colors.actionColor : colors.tertiary, ...styles.navText}}>All Meds</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Add New" component={EditMedScreen} options={({ navigation, route }) => ({
        tabBarStyle: { display: "none" },
        headerLeft: () => (<TouchableHighlight style={screenStyles.headerButton} onPress={() => {navigation.navigate('MedsNavigation')}}><Text style={screenStyles.headerButtonText}>Cancel</Text></TouchableHighlight>),
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
      })} />
      <Tab.Screen name="History" component={MedsArchiveScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/history.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : colors.tertiary
              }}
            />
            <Text style={{color: focused ? colors.actionColor : colors.tertiary, ...styles.navText}}>History</Text>
          </View>
        )
      }} />
      <Tab.Screen name="SettingsNavigation" component={SettingsNavigation} options={{
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <View style={styles.navItem}>
            <Image 
              source={require('../assets/icons/settings.png')}
              resizeMode={'contain'}
              style={{
                ...styles.navIcon,
                tintColor: focused ? colors.actionColor : colors.tertiary
              }}
            />
            <Text style={{color: focused ? colors.actionColor : colors.tertiary, ...styles.navText}}>Settings</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}