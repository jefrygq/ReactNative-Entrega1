import { View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native';

import screenStyles from '../screenStyles';
import styles from './styles';
import ScreenView from '../ScreenView';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth.action';
import colors from '../../constants/colors';

export default SettingsScreen = ({ route, navigation }) => {
	const userId = useSelector(state => state.auth.currentUserId);
	const currentUser = useSelector(state => state.profiles.current);
	const dispatch = useDispatch();

	console.log('currentUser');
	console.log(currentUser);

	const handleLogout = () => {
		dispatch(logout(userId));
	}
	
	return (
		<ScreenView>
			<ImageBackground source={require('../../assets/icons/settings.png')} 
				style={{flex: 1}}
				resizeMode='center' 
				imageStyle={{opacity: 0.2, tintColor: colors.tertiary}}
			>
				<View style={{flex: 1, padding: 20}}>
					<Text>Current User: {currentUser.email}</Text>
					<TouchableOpacity style={{...screenStyles.buttonSecondary, backgroundColor: 'red'}} onPress={handleLogout}>
						<Text style={screenStyles.buttonSecondaryText}>Logout</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</ScreenView>
	);
}


