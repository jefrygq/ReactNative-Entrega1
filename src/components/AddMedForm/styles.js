import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	internalContainer: {
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
		borderBottomColor: "gray",
		borderBottomWidth: 2,
		padding: 10,
		margin: 10
	},
	image: {
		width: 50,
		height: 50
	}
});
