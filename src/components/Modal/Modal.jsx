import { View, Modal as RNModal, StyleSheet, Text, Button } from "react-native";

export default Modal = ({ modalVisible, setModalVisible, onHandleDelete, itemSelected }) => {
  
  return (
    <RNModal visible={modalVisible} animationType={'fade'} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalWindow}>
          <Text>Are you sure you want to delete {itemSelected?itemSelected.name:''}?</Text>
          <View style={styles.buttonList}>
            <Button title={"Yes"} color={'red'} onPress={() => onHandleDelete(itemSelected)} />
            <Button title={"No"} onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalWindow: {
    padding: 20,
    height: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: .6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    margin: 40
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20
  }
});