import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MedListItem = ({med, handlePress}) => {
  return (
    <View style={styles.item}>
      <Text>{med.name}</Text>
      <Text>{med.dose}</Text>
      <Button title={'View'} onPress={() => handlePress(med)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default MedListItem;
