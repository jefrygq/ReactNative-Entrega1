import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import screenStyles from '../screenStyles';
import { useSelector } from 'react-redux';
import ScreenView from '../ScreenView';

const ViewMedScreen = ({route, navigation}) => {
  const med = useSelector(state => state.meds.current);
  
  return (
    <ScreenView>
      <Image style={{width: 100, height: 100}} source={{uri: med.imageFront}} />
      <Image style={{width: 100, height: 100}} source={{uri: med.imageBack}} />
      <Image style={{width: 100, height: 100}} source={{uri: med.imageMed}} />
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
    </ScreenView>
  );
}

const styles = StyleSheet.create({})

export default ViewMedScreen;
