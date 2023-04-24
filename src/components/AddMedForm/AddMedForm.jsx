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
	container: {
		flex: 1,
	}
});
