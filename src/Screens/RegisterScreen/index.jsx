import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import styles from './styles';
import logo from '../../assets/img/mlogo.png';

import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/auth.action";

export default RegisterScreen = ({route, navigation}) => {
  const dispatch  = useDispatch();
  
  const emptyAuth = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: emptyAuth
  });

  const onSubmit = data => {
    console.log(data);

    dispatch(signUp(data.email, data.password));
    reset(emptyAuth);
  };

  return (
    <View style={styles.form}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Medi App</Text>
      </View>
      <View style={styles.registerForm}>
        <Text style={styles.title}>Register</Text>
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              returnKeyType="done"
              value={value}
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
          )}
          name="passwordConfirm"
        />
        {errors.passwordConfirm  && <Text style={styles.error}>This is required.</Text>}
        
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryLink}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};