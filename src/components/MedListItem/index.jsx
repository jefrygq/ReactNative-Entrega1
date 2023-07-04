import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import screenStyles from '../../Screens/screenStyles';
import styles from './styles';

const MedListItem = ({med, handlePress}) => {
  const medImages = [];
  if(med.imageFront) {
    medImages.push(med.imageFront);
  }

  if(med.imageBack) {
    medImages.push(med.imageBack);
  }

  if(med.imageMed) {
    medImages.push(med.imageMed);
  }

  return (
    <TouchableOpacity onPress={() => handlePress(med)} style={[screenStyles.card, styles.item]}>
      <View style={styles.imagesContainer}>
        <ImagesStack images={medImages} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{med.name} <Text style={styles.presentation}>{med.presentation}</Text></Text>
        <Text style={styles.info}><Text style={styles.smallText}>{med.dose}</Text> every <Text style={styles.smallText}>{med.frequencyAmount} {med.frequencyUnit}</Text></Text>
        <Text style={styles.info}>for <Text style={styles.smallText}>{med.durationAmount} {med.durationUnit}</Text></Text>
      </View>
    </TouchableOpacity>
  );
}

export default MedListItem;
