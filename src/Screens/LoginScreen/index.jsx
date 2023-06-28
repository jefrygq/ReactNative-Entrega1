import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import styles from './styles';
import logo from '../../assets/img/mlogo.png';
import { login } from "../../store/actions/auth.action";

const LoginScreen = ({route, navigation}) => {
  const dispatch  = useDispatch();
  const loginError = useSelector(state => state.auth.loginError);
  
  const emptyAuth = {
    email: '',
    password: '',
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: emptyAuth
  });

  const onSubmit = data => {
    console.log(data);

    dispatch(login(data.email, data.password));
    reset(emptyAuth);
  };

  return (
    <View style={styles.form}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Medi App</Text>
      </View>
      <View style={styles.registerForm}>
        <Text style={styles.title}>Login</Text>
        {loginError && <Text style={styles.errorContainer}>
          Error: {loginError.message}
        </Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
            autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              returnKeyType="next"
              textContentType="username"
              style={styles.input}
              placeholder="Email"
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              returnKeyType="next"
              value={value}
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.error}>This is required.</Text>}
        
        
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
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