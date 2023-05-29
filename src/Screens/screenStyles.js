import { Platform, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default screenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  headerTitleStyle: {
    fontSize: 22,
    fontFamily: "Quicksand-Medium",
    color: Colors.primary,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});