import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableHighlight, Image, ScrollView } from "react-native";
import { useForm, Controller, reset } from "react-hook-form";
import ModalSelector from 'react-native-modal-selector'
import ScreenView from "../ScreenView";

import screenStyles from '../screenStyles';
import styles from './styles';

import { useDispatch } from "react-redux";
import { addMed, updateMed, getMeds } from '../../store/actions/meds.action';
import MedImages from "../../components/MedImages";

export default EditMedScreen = ({route, navigation}) => {
  console.log('route');
  console.log(route);
  const dispatch  = useDispatch();

  const [imageFront, setImageFront] = useState('');
  const [imageBack, setImageBack] = useState('');
  const [imageMed, setImageMed] = useState('');
  
  const med = route.params && route.params.med ? route.params.med : null;

  useEffect(() => {
    if (med) {
      setImageFront(med.imageFront);
      setImageBack(med.imageBack);
      setImageMed(med.imageMed);
    }
  }, [med]);

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

    // add images to data
    data.imageFront = imageFront;
    data.imageBack = imageBack;
    data.imageMed = imageMed;

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
    <ScreenView>
      <View style={styles.form}>
        <MedImages imageFront={imageFront} setImageFront={setImageFront} imageBack={imageBack} setImageBack={setImageBack} imageMed={imageMed} setImageMed={setImageMed} />
        
        <View style={screenStyles.card}>
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
              <Text>Every: </Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="#"
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
                    initValue={value ? value : "hours"}
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
              <Text>During: </Text>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="#"
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

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.formControl}>
                <Text style={styles.label}>Starting On:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: June 10, 6:00pm"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
            name="startDateTime"
          />
          

          <TouchableHighlight style={screenStyles.buttonPrimary} onPress={handleSubmit(onSubmit)}>
            <Text style={screenStyles.buttonPrimaryText}>Save</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScreenView>
  );
};