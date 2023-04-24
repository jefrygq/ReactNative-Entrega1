import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, FlatList } from 'react-native';
import Header from './src/components/Header/Header';
import MedsList from './src/components/MedsList/MedsList';
import AddMedForm from './src/components/AddMedForm/AddMedForm';
import MainNavigation from './src/components/MainNavigation/MainNavigation';

export default  App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.internalContainer}>
        <View style={styles.rowContainer}>
          <Header title={'Hoy'} buttonLeft={<Button title={'Perfil'} />} buttonRight={<Button title={'Buscar'} />} />
        </View>
        <AddMedForm />
      </View>
      <View style={styles.internalContainer}>
        <MedsList meds={[]} />
      </View>
      <View>
        <MainNavigation />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffccc',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  internalContainer: {
    backgroundColor: "white", 
    padding: 20,
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderBottomColor:"gray", 
    borderBottomWidth: 2, 
    padding: 10,
    margin: 10
  },
  image: {
    width: 50,
    height: 50
  }
});
