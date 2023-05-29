import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default styles = StyleSheet.create({
	form: {
		flexDirection: 'column',
	},
	formControl: {
		marginVertical: 10,
		height: 50
	},
	label: {
		fontWeight: 'bold',
	},
	input: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: Colors.secondary,
	},
	submit: {
		marginTop: 20,
		backgroundColor: Colors.primary,
		padding: 10,
		borderRadius: 20,
		alignContent: 'center',
		justifyContent: 'center'
	},
	submitText: {
		color: Colors.white,
		textAlign: 'center'
	},
	error: {
		color: Colors.red,
		fontSize: 12
	}
});
