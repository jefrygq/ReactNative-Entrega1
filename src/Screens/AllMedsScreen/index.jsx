import { View, Text, StyleSheet } from 'react-native';

export default AllMedsScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;
	
	return (
		<View style={styles.container}>
			<Text>AllMeds Component</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
