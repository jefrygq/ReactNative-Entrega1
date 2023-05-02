import { View, Text, StyleSheet } from 'react-native';

export default Settings = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;
	
	return (
		<View style={styles.container}>
			<Text>Settings Component</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
