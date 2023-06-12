import { Platform, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default screenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    paddingBottom: Platform.OS === "android" ? 125 : 135,
    backgroundColor: Colors.background,
    maxHeight: '100%',
  },
  headerTitleStyle: {
    fontSize: 22,
    fontFamily: "Quicksand-Medium",
    color: Colors.primary,
    textAlign: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    maxWidth: '100%',
  },
  buttonPrimary: {
    marginTop: 20,
		backgroundColor: Colors.primary,
		padding: 10,
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'center'
  },
  buttonPrimaryText: {
    color: Colors.white,
		textAlign: 'center'
  },
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
  headerButton: {
    borderColor: Colors.tertiary,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center'
  },
  headerButtonText: {
    color: Colors.tertiary,
  }
});