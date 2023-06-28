import { Platform, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
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
    color: colors.primary,
    fontSize: 36,
    fontFamily: "Quicksand-Medium",
  },
  title: {
    color: colors.tertiary,
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: colors.actionColor,
    borderRadius: 30,
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Quicksand-Medium",
  },
  secondaryLink: {
    color: colors.tertiary,
    fontSize: 16,
    marginTop: 15,
  },
  error: {
    color: colors.red,
    fontSize: 12,
    borderTopColor: colors.red,
    borderTopWidth: 1,
    width: "72%",
    textAlign: 'center'
  },
  errorContainer: {
    width: "80%",
    margin: 10,
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.red,
    borderRadius: 10,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});