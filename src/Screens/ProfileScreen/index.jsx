import { View, Text } from 'react-native';

import screenStyles from '../screenStyles';
import styles from './styles';

export default ProfileScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;
	
	return (
		<View style={screenStyles.screenContainer}>
			<Text>Profile Component</Text>
		</View>
	);
}


