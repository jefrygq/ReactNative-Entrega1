import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import screenStyles from '../../Screens/screenStyles';
import { styles } from './styles';


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

  const stackImages = (medImages) => {
    const stack = medImages.map((image, index) => {
      const removeOpacity = 0.42 * index;

      return (
        <View
          key={index} style={{
          ...screenStyles.card,
          ...styles.imageWrapper, 
          opacity: 1 - removeOpacity,
          left: index * 8,
          top: index * 8,
          elevation: 15 - index*2,
          zIndex: 5 - index,
        }}>
          <Image style={styles.image} source={{uri: image}} />
        </View>
      );
    });

    return stack;
  }

  return (
    <TouchableOpacity onPress={() => handlePress(med)} style={[screenStyles.card, styles.item]}>
      <View style={styles.imagesContainer}>
        {medImages.length > 0 && stackImages(medImages)}
        {medImages.length === 0 && <View
          style={{
          ...screenStyles.card,
          ...styles.imageWrapper,
          elevation: 15,
        }}>
          <View style={styles.placeholder}>
            <Image style={styles.placeholderImage} source={require('../../assets/icons/pills.png')} />
          </View>
        </View>}
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
