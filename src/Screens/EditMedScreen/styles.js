import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default styles = StyleSheet.create({
	form: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 20,
	},
	formControl: {
		marginBottom: 15,
		minHeight: 60,
	},
	label: {
		fontSize: 16,
		color: COLORS.tertiary,
	},
	input: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: COLORS.tertiary,
	},
	inputSelect: {
		flex: 1,
		marginLeft: 10
	},
	error: {
		color: COLORS.red,
		fontSize: 12
	},
	imageUploader: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: COLORS.tertiary,
	}
});
