import { Platform, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  logoContainer: {
    alignItems: "center",
  },
  loginForm: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    color: colors.primary,
    fontSize: 36,
    fontFamily: "Quicksand-Medium",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: colors.actionColor,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Quicksand-Medium",
  },
});