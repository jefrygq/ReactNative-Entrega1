import { StyleSheet, Platform } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  infoContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: COLORS.secondary,
  },
  cardHeader: {
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.tertiary,
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dotted',
  },
  name: {
    color: COLORS.highlight,
    fontSize: 24,
    fontWeight: 'bold',
  },
  presentation: {
    color: COLORS.tertiary,
  },
  label: {
    fontSize: 18,
    color: COLORS.tertiary,
    // fontWeight: 'bold',
  },
  primaryText: {
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: COLORS.tertiary,
    fontWeight: 'normal',
  },
});
