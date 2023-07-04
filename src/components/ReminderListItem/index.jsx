import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import screenStyles from '../../Screens/screenStyles';
import styles from './styles';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import ImagesStack from '../ImagesStack';
dayjs.extend(localizedFormat);

const ReminderListItem = ({reminder, handlePress, first}) => {
  // console.log('received remider');
  // console.log(reminder);

  const reminderImages = [];
  if(reminder.imageFront) {
    reminderImages.push(reminder.imageFront);
  }

  if(reminder.imageBack) {
    reminderImages.push(reminder.imageBack);
  }

  if(reminder.imageReminder) {
    reminderImages.push(reminder.imageReminder);
  }

  const stylesArray = first ? [screenStyles.card, styles.reminder, styles.first] :  [screenStyles.card, styles.reminder];

  return (
    <View style={styles.item} onPress={() => handlePress(reminder)}>
      {first && <Text style={styles.banner}>Next Medicine</Text>}

      <Text style={styles.date}>{dayjs(reminder.date).format('LL')}</Text>

      <TouchableOpacity style={stylesArray}>
        <View style={styles.imagesContainer}>
          <ImagesStack images={reminderImages} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{reminder.name} <Text style={styles.presentation}>{reminder.presentation}</Text></Text>
          <Text style={styles.smallText}>{reminder.dose}</Text>
          <Text style={styles.info}>{reminder.status}</Text>
        </View>
        <Text style={styles.time}>{dayjs(reminder.date).format('LT')}</Text>
      </TouchableOpacity>

      {first && <Text style={[styles.banner, styles.upcoming]}>Upcoming</Text>}
    </View>
  );
}

export default ReminderListItem;
