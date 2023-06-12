import React from 'react';
import {View} from 'react-native';
import ImageSelector from '../ImageSelector';
import screenStyles from '../../Screens/screenStyles';
import styles from './styles';



const MedImages = ({imageFront, setImageFront, imageBack, setImageBack, imageMed, setImageMed}) => {
  return (
    <View style={screenStyles.rowContainer}>
      <View style={styles.picker}>
        <ImageSelector title='Front' imageUri={imageFront} onImage={setImageFront} />
      </View>
      <View style={styles.picker}>
        <ImageSelector title='Back' imageUri={imageBack} onImage={setImageBack} />
      </View>
      <View style={styles.picker}>
        <ImageSelector title='Medicine' imageUri={imageMed} onImage={setImageMed} />
      </View>
    </View>
  );
}

export default MedImages;
