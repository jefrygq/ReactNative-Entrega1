import { Text, View, TextInput, TouchableHighlight } from "react-native";
import { useForm, Controller, reset } from "react-hook-form";
import ModalSelector from 'react-native-modal-selector'

import screenStyles from '../screenStyles';
import styles from './styles';

import { useDispatch } from "react-redux";
import { addMed, updateMed, getMeds } from '../../store/actions/meds.action';

export default EditMedScreen = ({route, navigation}) => {
  const dispatch  = useDispatch();
  const med = route.params ? route.params.med : false;

  const emptyMed = {
    name: '',
    presentation: '',
    dose: '',
    frequencyAmount: '',
    frequencyUnit: '',
    durationAmount: '',
    durationUnit: '',
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: med ? med : emptyMed
  });
  const onSubmit = data => {
    console.log(data);

    // add created unix timestamp
    data.createdAt = Date.now();

    if (med) {
      console.log('updating existing med');
      dispatch(updateMed({key: med.id, med: data}));
    } else {
      console.log('adding new med');
      dispatch(addMed(data));;
    }
    reset();

    // redirect to all meds screen
    dispatch(getMeds());
    navigation.navigate('MedsNavigation' , { screen: 'AllMeds' });
  };

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
                placeholder="Ex: 50mg, 10ml, 2.5oz, 3%"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="presentation"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.formControl}>
              <Text style={styles.label}>Dose</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 2 spoons, 5 cc, 1 pill"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="dose"
        />

        <View style={styles.formControl}>
          <Text style={styles.label}>Frequency</Text>
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
                  keyboardType="numeric"
                />
              )}
              name="frequencyAmount"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value} }) => (
                <ModalSelector
                  style={styles.inputSelect}
                  data={[
                    {key: 'minutes', label: "Minutes"},
                    {key: 'hours', label: "Hours"},
                    {key: 'days', label: "Days"},
                    {key: 'weeks', label: "Weeks"}
                  ]}
                  initValue={value ? value : "minutes"}
                  onChange={(option)=>{ onChange(option.key) }} 
                />
              )}
              name="frequencyUnit"
            />
          </View>
        </View>

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
                  keyboardType="numeric"
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
                <ModalSelector
                  style={styles.inputSelect}
                  data={[
                    {key: "days", label: "Days"},
                    {key: "weeks", label: "Weeks"},
                    {key: "months", label: "Months"},
                    {key: "years", label: "Years"},
                    {key: "forever", label: "Forever"}
                  ]}
                  initValue={value ? value : "days"}
                  onChange={(option)=>{ onChange(option.key) }} 
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