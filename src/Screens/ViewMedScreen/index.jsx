import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import screenStyles from '../screenStyles';
import { useSelector } from 'react-redux';
import ScreenView from '../ScreenView';
import ImageCarousel from '../../components/ImageCarousel';
import COLORS from '../../constants/colors';

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
          <Text style={styles.label}>Treatment Starts At:</Text>
          <Text style={styles.primaryText}>{med.startsAt}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Treatment Ends At:</Text>
          <Text style={styles.primaryText}>{med.endsAt}</Text>
        </View>

        <Button title="Edit" onPress={() => navigation.navigate('EditMed', {med})} />
        <Button title="Delete" color="red" onPress={() => console.log('DeleteMed', med)} />
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: COLORS.secondary,
  },
  cardHeader: {
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.tertiary,
    borderStyle: 'dotted'
  },
  name: {
    color: COLORS.highlight,
    fontSize: 24,
    fontWeight: 'bold',
  },
  presentation: {
    color: COLORS.tertiary,
  },
  label: {
		fontSize: 18,
		color: COLORS.tertiary,
    // fontWeight: 'bold',
	},
  primaryText: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: COLORS.tertiary,
    fontWeight: 'normal',
  },
})

export default ViewMedScreen;
