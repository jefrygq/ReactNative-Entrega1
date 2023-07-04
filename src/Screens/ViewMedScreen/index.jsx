import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import { deleteMed, getMeds } from '../../store/actions/meds.action';

import ScreenView from '../ScreenView';
import ImageCarousel from '../../components/ImageCarousel';

import screenStyles from '../screenStyles';
import { styles } from './styles';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

const ViewMedScreen = ({route, navigation}) => {
  dayjs.extend(localizedFormat);
  const dispatch  = useDispatch();
  const med = useSelector(state => state.meds.current);

  const hasImages = med.imageFront || med.imageBack || med.imageMed;
  const medImages = [];
  if(med.imageFront) {
    medImages.push({id: 'imageFront', title: 'Front Image', uri: med.imageFront});
  }

  if(med.imageBack) {
    medImages.push({id: 'imageBack', title: 'Back Image', uri: med.imageBack});
  }

  if(med.imageMed) {
    medImages.push({id: 'imageMed', title: 'Medicine Image', uri: med.imageMed});
  }

  const handleDelete = (med) => {
    // confirm delete
    Alert.alert(
      'Delete Medication?',
      'Are you sure you want to delete this medication?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => {
            // delete from redux
            dispatch(deleteMed(med));

            // redirect to all meds screen
            dispatch(getMeds());
            navigation.navigate('MedsNavigation' , { screen: 'AllMeds' });
          }
        }
      ]
    );
  }
  
  return (
    <ScreenView>
      {hasImages && <ImageCarousel images={medImages} />}

      <View style={[screenStyles.card, styles.infoContainer]}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{med.name} <Text style={styles.presentation}>{med.presentation}</Text></Text>
        </View>
        
        <View style={styles.item}>
          <Text style={styles.label}>Dose:</Text>
          <Text style={styles.primaryText}>{med.dose} <Text style={styles.secondaryText}>every</Text> {med.frequencyAmount} {med.frequencyUnit}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.primaryText}>{med.durationAmount} {med.durationUnit}</Text>
        </View>
        
        <View style={styles.item}>
          <Text style={styles.label}>Treatment Starts On:</Text>
          <Text style={styles.primaryText}>{dayjs(med.startsOn).format('LLL')}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Treatment Ends On:</Text>
          <Text style={styles.primaryText}>{dayjs(med.endsOn).format('LLL')}</Text>
        </View>

        <TouchableOpacity style={screenStyles.buttonSecondary} onPress={() => navigation.navigate('EditMed', {med})}>
          <Text style={screenStyles.buttonSecondaryText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...screenStyles.buttonSecondary, backgroundColor: 'red'}} onPress={() => handleDelete(med)}>
          <Text style={screenStyles.buttonSecondaryText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScreenView>
  );
}

export default ViewMedScreen;
