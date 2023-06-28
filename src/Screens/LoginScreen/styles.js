import { Platform, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export default styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  logoContainer: {
    alignItems: "center",
  },
  registerForm: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    color: COLORS.primary,
    fontSize: 36,
    fontFamily: "Quicksand-Medium",
  },
  title: {
    color: COLORS.tertiary,
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: COLORS.actionColor,
    borderRadius: 30,
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: "Quicksand-Medium",
  },
  secondaryLink: {
    color: COLORS.tertiary,
    fontSize: 16,
    marginTop: 15,
  },
  error: {
    color: COLORS.red,
    fontSize: 12,
    borderTopColor: COLORS.red,
    borderTopWidth: 1,
    width: "72%",
    textAlign: 'center'
  },
  errorContainer: {
    width: "80%",
    margin: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.red,
    borderRadius: 10,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});