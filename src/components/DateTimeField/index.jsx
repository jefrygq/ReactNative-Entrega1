import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Platform} from 'react-native';
import dayjs from 'dayjs';

import COLORS from '../../constants/colors';

export default DateTimeField = ({value, onChange, onBlur, otherStyles = {}}) => {
  console.log('value');
  console.log(value);
  const [date, setDate] = useState(new Date(value));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  console.log(date.valueOf());

  const iOSDevice = Platform.OS === 'ios';

  const handleOnChange = (event, selectedDate) => {
    console.log('SelectedDate:');
    console.log(selectedDate.valueOf());
    console.log(selectedDate);


    setShow(false);
    onChange(selectedDate.valueOf());
    setDate(selectedDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={otherStyles}>
      {iOSDevice && <DateTimePicker value={date} mode={'datetime'} onChange={handleOnChange} />}
      {!iOSDevice && (<View style={styles.dateTime}>
        <TouchableOpacity style={styles.dateTimeButton} onPress={showDatepicker}>
          <Text style={styles.dateTimeButtonText}>{dayjs(date).format('LL')}</Text>
        </TouchableOpacity>
        <Text style={styles.dateTimeButtonText}> at </Text>
        <TouchableOpacity style={styles.dateTimeButton} onPress={showTimepicker}>
          <Text style={styles.dateTimeButtonText}>{dayjs(date).format('LT')}</Text>
        </TouchableOpacity>
        {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          onChange={handleOnChange}
        />
      )}
      </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  dateTime: {
    flexDirection: 'row',

    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
  },
  dateTimeButton: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 5,
    padding: 10,
    height: 40
  },
  dateTimeButtonText: {
    color: COLORS.tertiary,
    fontSize: 16,
  },
})
