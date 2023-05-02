import { View, Text, StyleSheet } from 'react-native';

export default MedsListItem = ({name}) => {
	

	return (
		
		<View style={styles.rowContainer}>
			<Text>{name}</Text>
			<Button title={"Edit"} />
			<Button title={"Delete"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
