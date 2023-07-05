import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, ImageBackground } from 'react-native';

import ScreenView from '../ScreenView';
import COLORS from '../../constants/colors';

import { getReminders } from '../../store/actions/reminders.action';
import HistoryListItem from '../../components/HistoryListItem';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

export default RemindersHistoryScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.currentUserId);
  const reminders = useSelector(state => state.reminders.reminders);
	
	// load on every focus change
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

	// get only the reminders from before now
  const filteredReminders = reminders.filter(
    reminder => {
      return (reminder.date < dayjs().valueOf());
    }
  );

	return (
		<ScreenView noScroll={true}>
			<ImageBackground source={require('../../assets/icons/history2.png')} 
				style={{flex: 1}}
				resizeMode='center' 
				imageStyle={{opacity: 0.2, tintColor: COLORS.tertiary}}
			>
				<FlatList
					data={filteredReminders.sort((a, b) => { return b.date - a.date})}
					renderItem={({item, index}) => <HistoryListItem reminder={item} handlePress={handlePress} />}
					keyExtractor={item => item.id}
				/>
			</ImageBackground>
		</ScreenView>
	);
}



