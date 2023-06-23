import { View, Text, Button } from 'react-native';

import screenStyles from '../screenStyles';
import styles from './styles';
import ScreenView from '../ScreenView';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth.action';

export default SettingsScreen = ({ route, navigation }) => {
	const userId = useSelector(state => state.auth.currentUserId);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout(userId));
	}
	
	return (
		<ScreenView>
			<Text>Settings Component</Text>
			<Button color="red" title="Logout" onPress={handleLogout} />
		</ScreenView>
	);
}


