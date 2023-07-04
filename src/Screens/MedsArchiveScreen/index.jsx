import { View, Text, ImageBackground } from 'react-native';
import screenStyles from '../screenStyles';
import styles from './styles';
import ScreenView from '../ScreenView';
import colors from '../../constants/colors';

export default MedsArchiveScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;
	
	return (
		<ScreenView noScroll={true}>
			<ImageBackground source={require('../../assets/icons/history2.png')} 
				style={{flex: 1}}
				resizeMode='center' 
				imageStyle={{opacity: 0.2, tintColor: colors.tertiary}}
			>
				<Text>MedsArchive Component</Text>
			</ImageBackground>
		</ScreenView>
	);
}


