import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default AddMedForm = () => {
	const [textItem, setTextItem] = useState('');
	const [list, setList] = useState([]);

	const onHandleTextChange = text => setTextItem(text);
	const onHandleAddToList = () => {
		setList(prevState => [...prevState, textItem]);
		setTextItem('');
	};
	
	return (
		<View style={styles.rowContainer}>
			<TextInput placeholder='List Item' style={styles.input} onChangeText={onHandleTextChange} value={textItem} />
			<Button title="Add" onPress={onHandleAddToList} />
        </View>
	);
}

const styles = StyleSheet.create({
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
