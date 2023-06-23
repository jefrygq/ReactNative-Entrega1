import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import screenStyles from '../screenStyles';
import styles from './styles';
import logo from '../../assets/img/mlogo.png';

const LoginScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Medi App</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />

        <TouchableOpacity title="Login" onPress={() => console.log('Login')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryLink} onPress={() => navigation.navigate('Register')} >
          <Text style={styles.secondaryLink} >Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryLink} onPress={() => navigation.navigate('ForgotPassword')} >
          <Text style={styles.secondaryLink} >Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;