import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import screenStyles from '../../Screens/screenStyles';
import { styles } from './styles';


const MedListItem = ({med, handlePress}) => {
  return (
    <TouchableOpacity onPress={() => handlePress(med)} style={[screenStyles.card, styles.item]}>
      <View style={styles.imagesContainer}>
        <Image source={{uri: med.imageFront}} style={styles.image} />
        <Image source={{uri: med.imageBack}} style={styles.image} />
        <Image source={{uri: med.imageMed}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{med.name} <Text style={styles.presentation}>{med.presentation}</Text></Text>
        <Text style={styles.info}><Text style={styles.smallText}>{med.dose}</Text> every <Text style={styles.smallText}>{med.frequencyAmount} {med.frequencyUnit}</Text> for <Text style={styles.smallText}>{med.durationAmount} {med.durationUnit}</Text></Text>
      </View>
    </TouchableOpacity>
  );
}

export default MedListItem;
