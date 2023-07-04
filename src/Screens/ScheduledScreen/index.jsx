import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, FlatList, ImageBackground } from 'react-native';

import ScreenView from '../ScreenView';
import COLORS from '../../constants/colors';

import { getReminders } from '../../store/actions/reminders.action';
import ReminderListItem from '../../components/ReminderListItem';

export default ScheduledScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.currentUserId);
  const reminders = useSelector(state => {
    // console.log('global state');
    // console.log(state);

    // return reminders sorted by date ASC
    return state.reminders.reminders.sort((a, b) => { return a.date - b.date});
  });
  
  useFocusEffect(
    useCallback(() => {
      dispatch(getReminders({userId: userId}));
    }, [userId])
  );

	// console.log('list reminders:');
	// console.log(reminders);

  const handlePress = (reminder) => {
		dispatch(selectedReminder(reminder.id));
		// navigation.navigate('ViewReminder', {reminder});
	};

	return (
		<ScreenView noScroll={true}>
			<ImageBackground source={require('../../assets/icons/box.png')} 
				style={{flex: 1}}
				resizeMode='center' 
				imageStyle={{opacity: 0.2, tintColor: COLORS.tertiary}}
			>
				<FlatList
					data={reminders}
					renderItem={({item}) => <ReminderListItem reminder={item} handlePress={handlePress} />}
					keyExtractor={item => item.id}
				/>
			</ImageBackground>
		</ScreenView>
	);
}



