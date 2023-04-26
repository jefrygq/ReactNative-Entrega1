import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, FlatList } from 'react-native';
import Modal from './src/components/Modal/Modal';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleTextChange = text => setTextItem(text);
  const onHandleAddToList = () => {
    setList(prevState => [...prevState, {name: textItem, id: list.length}]);
    setTextItem('');
  };

  const onHandleDelete = item => {
    setList(prevState => prevState.filter(i => i.name !== item.name));
    setModalVisible(false);
  };

  const onHandleModal = item => {
    console.log(item);
    setItemSelected(item);
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <View style={styles.rowContainer}>
      <Text>{item.name}</Text>
      <Button title={"Delete"} onPress={() => onHandleModal(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.internalContainer}>
        <View style={styles.rowContainer}>
          <Text>Shopping List</Text>
          <Image source={require('./assets/groceries.png')} style={styles.image} />
        </View>
        <View style={styles.rowContainer}>
          <TextInput placeholder='List Item' style={styles.input} onChangeText={onHandleTextChange} value={textItem} />
          <Button title="Add" onPress={onHandleAddToList} />
        </View>
      </View>
      <View style={styles.internalContainer}>
        <FlatList 
          data={list} 
          renderItem={renderItem} 
          keyExtractor={item => item.id}
        />
      </View>
      
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} onHandleDelete={onHandleDelete} itemSelected={itemSelected} />
      
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
