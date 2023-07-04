import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default styles = StyleSheet.create({
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
});
