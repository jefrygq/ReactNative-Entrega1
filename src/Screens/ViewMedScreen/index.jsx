import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import screenStyles from '../screenStyles';
import { useSelector } from 'react-redux';
import ScreenView from '../ScreenView';
import ImageCarousel from '../../components/ImageCarousel';
import { styles } from './styles';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const ViewMedScreen = ({route, navigation}) => {
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

        <Button title="Edit" onPress={() => navigation.navigate('EditMed', {med})} />
        <Button title="Delete" color="red" onPress={() => console.log('DeleteMed', med)} />
      </View>
    </ScreenView>
  );
}

export default ViewMedScreen;
