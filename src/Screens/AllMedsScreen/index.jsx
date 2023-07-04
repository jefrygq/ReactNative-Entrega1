import { FlatList, ImageBackground } from 'react-native';

import MedListItem from '../../components/MedListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMeds, selectedMed } from '../../store/actions/meds.action';
import { useEffect } from 'react';
import ScreenView from '../ScreenView';

import COLORS from '../../constants/colors';

export default AllMedsScreen = ({ route, navigation }) => {	
	
	const dispatch = useDispatch();
  const meds = useSelector(state => (state.meds.meds));
	const userId = useSelector(state => state.auth.currentUserId);

  useEffect(() => {
    dispatch(getMeds({userId: userId}));
  }, []);

	// console.log('meds:');
	// console.log(meds);

	const handlePress = (med) => {
		dispatch(selectedMed(med.id));
		navigation.navigate('ViewMed', {med});
	};

	return (
		<ScreenView noScroll={true}>
			<ImageBackground source={require('../../assets/icons/box.png')} 
				style={{flex: 1}}
				resizeMode='center' 
				imageStyle={{opacity: 0.2, tintColor: COLORS.tertiary}}
			>
				<FlatList
					data={meds}
					renderItem={({item}) => <MedListItem med={item} handlePress={handlePress} />}
					keyExtractor={item => item.id}
				/>
			</ImageBackground>
		</ScreenView>
	);
}


