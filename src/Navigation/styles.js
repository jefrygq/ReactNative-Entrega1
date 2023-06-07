import { Platform, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  navContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 15,
    left: 20,
    right: 20,
    backgroundColor: Colors.white,
    borderRadius: 15,
    height: 80, 
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 15 : 0,
    width: '100%'
  },
  navIcon: {
    width: 32,
    height: 32,
  },
  navText:{
    fontSize: 10,
    paddingTop: 5,
    textTransform: 'uppercase',
  },
  addButton: {
    backgroundColor: Colors.actionColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 5,
    top: -30,
    shadowColor: Colors.actionColor,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  hiddenNav: {
    display: 'none',
  }
});