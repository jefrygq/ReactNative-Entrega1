import { View, Text, Button, FlatList } from 'react-native';
import screenStyles from '../screenStyles';
import styles from './styles';

import MedListItem from '../../components/MedListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMeds, selectedMed } from '../../store/actions/meds.action';
import { useEffect } from 'react';

export default AllMedsScreen = ({ route, navigation }) => {	
	
	const dispatch = useDispatch();
  const meds = useSelector(state => (state.meds.meds));

  useEffect(() => {
    dispatch(getMeds());
  }, []);

	console.log('meds:');
	console.log(meds);

	const handlePress = (med) => {
		dispatch(selectedMed(med.id));
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


