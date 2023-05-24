import { View, Text, Button, FlatList } from 'react-native';
import screenStyles from '../screenStyles';
import styles from './styles';

import {MEDS} from '../../data/meds';
import MedListItem from '../../components/MedListItem';

export default AllMedsScreen = ({ route, navigation }) => {	
	const handlePress = (med) => {
		navigation.navigate('ViewMed', {med});
	};

	return (
		<View style={screenStyles.screenContainer}>
			<FlatList
				data={MEDS}
				renderItem={({item}) => <MedListItem med={item} handlePress={handlePress} />}
				keyExtractor={item => item.id}
			/>
		</View>
	);
}


