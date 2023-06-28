import { Platform, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default screenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: Platform.OS === "android" ? 125 : 135,
    backgroundColor: COLORS.background,
    maxHeight: '100%',
    maxWidth: '100%',
  },
  headerTitleStyle: {
    fontSize: 22,
    fontFamily: "Quicksand-Medium",
    color: COLORS.primary,
    textAlign: "center",
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    padding: 20,
    marginVertical: 10,
    maxWidth: '100%',
  },
  buttonPrimary: {
    marginTop: 20,
		backgroundColor: COLORS.primary,
		padding: 10,
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'center'
  },
  buttonPrimaryText: {
    color: COLORS.white,
		textAlign: 'center'
  },
  shadow: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  headerButton: {
    borderColor: COLORS.tertiary,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center'
  },
  headerButtonText: {
    color: COLORS.tertiary,
  }
});