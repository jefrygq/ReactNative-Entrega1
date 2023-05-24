import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import screenStyles from '../screenStyles';

const ViewMedScreen = ({route, navigation}) => {
  const med = route.params.med;
  return (
    <View style={screenStyles.screenContainer}>
      <Text>ViewMedScreen</Text>
      <Button title="Edit med" onPress={() => navigation.navigate('EditMed', {med})} />
    </View>
  );
}

const styles = StyleSheet.create({})

export default ViewMedScreen;
