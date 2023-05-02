import { StyleSheet } from "react-native";

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
    display: 'flex',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 80,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 40,
    height:40,
  },
  navText:{
    fontSize: 10,
    paddingTop: 5,
    textTransform: 'uppercase',
  },
  addButton: {
    backgroundColor: '#e32f45',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 5,
    top: -30,
    shadowColor: '#e32f45',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },


});