import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default styles = StyleSheet.create({
	form: {
		flexDirection: 'column',
	},
	formControl: {
		marginVertical: 10,
		height: 60
	},
	label: {
		fontSize: 16,
		color: Colors.tertiary,
	},
	input: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: Colors.tertiary,
	},
	inputSelect: {
		flex: 1,
		marginLeft: 10
	},
	error: {
		color: Colors.red,
		fontSize: 12
	},
	imageUploader: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: Colors.tertiary,
	}
});
