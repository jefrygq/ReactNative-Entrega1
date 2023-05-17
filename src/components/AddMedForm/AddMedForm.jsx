import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

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
