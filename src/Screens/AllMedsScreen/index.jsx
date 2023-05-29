import { View, Text, Button, FlatList } from 'react-native';
import screenStyles from '../screenStyles';
import styles from './styles';

import MedListItem from '../../components/MedListItem';
import { useSelector } from 'react-redux';

export default AllMedsScreen = ({ route, navigation }) => {	
	const meds = useSelector(state => {
		console.log(state);
		return state.meds.meds
	});
	console.log('meds:');
	console.log(meds);

	const handlePress = (med) => {
		navigation.navigate('ViewMed', {med});
	};

	return (
		<View style={screenStyles.screenContainer}>
			<FlatList
				data={meds}
				renderItem={({item}) => <MedListItem med={item} handlePress={handlePress} />}
				keyExtractor={item => item.id}
			/>
		</View>
	);
}


