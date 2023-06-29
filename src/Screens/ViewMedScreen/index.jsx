import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import screenStyles from '../screenStyles';
import { useSelector } from 'react-redux';
import ScreenView from '../ScreenView';
import ImageCarousel from '../../components/ImageCarousel';

const ViewMedScreen = ({route, navigation}) => {
  const med = useSelector(state => state.meds.current);

  const hasImages = med.imageFront || med.imageBack || med.imageMed;
  
  const medImages = [
    {id: 'imagFront', title: 'Front Image', uri: med.imageFront},
    {id: 'imageBack', title: 'Back Image', uri: med.imageBack},
    {id: 'imageMed', title: 'Medicine Image', uri: med.imageMed}
  ];
  
  return (
    <ScreenView>
      {hasImages && <ImageCarousel images={medImages} />}

      <View style={[screenStyles.card, styles.infoContainer]}>
        <Text>createdAt: {med.createdAt}</Text>
        <Text>doseAmount: {med.doseAmount}</Text>
        <Text>doseUnit: {med.doseUnit}</Text>
        <Text>durationAmount: {med.durationAmount}</Text>
        <Text>durationUnit: {med.durationUnit}</Text>
        <Text>frequency: {med.frequency}</Text>
        <Text>id: {med.id}</Text>
        <Text>name: {med.name}</Text>
        <Text>presentation: {med.presentation}</Text>

        <Button title="Edit med" onPress={() => navigation.navigate('EditMed', {med})} />
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginHorizontal: 20,
    marginVertical: 20
  }
})

export default ViewMedScreen;
