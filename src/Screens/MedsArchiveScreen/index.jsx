import { View, Text, StyleSheet } from 'react-native';

export default MedsArchiveScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;
	
	return (
		<View style={styles.container}>
			<Text>MedsArchive Component</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
