import { Platform, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  navContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 15,
    left: 15,
    right: 15,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 80, 
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 15 : 0,
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
    backgroundColor: colors.actionColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 5,
    top: -30,
    shadowColor: colors.actionColor,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },


});