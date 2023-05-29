import { Text, View, TextInput, Button, Alert, TouchableHighlight } from "react-native";
import { useForm, Controller } from "react-hook-form";
import screenStyles from '../screenStyles';
import styles from './styles';
import { useDispatch } from "react-redux";

export default EditMedScreen = ({route, navigation}) => {
  const dispatch  = useDispatch();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const onSubmit = data => {
    console.log(data);
    dispatch(addMed(data));
  }

  return (
    <View style={screenStyles.screenContainer}>
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.formControl}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Paracetamol"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="name"
        />
        {errors.name && <Text style={styles.error}>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.formControl}>
              <Text style={styles.label}>Presentation</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 50mg, 10ml, 2.5oz"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="presentation"
        />

        <View style={styles.formControl}>
          <Text style={styles.label}>Dose</Text>
          <View style={screenStyles.rowContainer}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter a number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="doseAmount"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ex: tablets, spoons, CCs"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="doseUnit"
            />
          </View>
        </View>

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.formControl}>
              <Text style={styles.label}>Frequency</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Every 8 hrs, Once a day, With every meal"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="frequency"
        />

        <View style={styles.formControl}>
          <Text style={styles.label}>Duration</Text>
          <View style={screenStyles.rowContainer}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter a number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="durationAmount"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Days, Weeks, Months"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="durationUnit"
            />
          </View>
        </View>

        <TouchableHighlight style={styles.submit} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitText}>Save</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};