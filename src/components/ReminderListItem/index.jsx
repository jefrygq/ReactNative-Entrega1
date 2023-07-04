import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import screenStyles from '../../Screens/screenStyles';
import styles from './styles';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import ImagesStack from '../ImagesStack';
dayjs.extend(localizedFormat);

const ReminderListItem = ({reminder, handlePress}) => {
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

  return (
    <View style={styles.item} onPress={() => handlePress(reminder)}>
      <Text style={styles.date}>{dayjs(reminder.date).format('LLL')}</Text>

      <TouchableOpacity style={[screenStyles.card, styles.reminder]}>
        <View style={styles.imagesContainer}>
          <ImagesStack images={reminderImages} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{reminder.name} <Text style={styles.presentation}>{reminder.presentation}</Text></Text>
          <Text style={styles.smallText}>{reminder.dose}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ReminderListItem;
