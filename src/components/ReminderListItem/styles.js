import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export default styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  date: {
    color: COLORS.tertiary,
    fontSize: 14,
  },
  reminder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    padding: 15
  },
  imagesContainer: {
    flex: 1,
    height: 90,
    position: 'relative',
  },
  infoContainer: {
    flex: 2,
    flowDirection: 'column',
    paddingLeft: 15,
  },
  info: {
    color: COLORS.tertiary,
  },
  name: {
    color: COLORS.highlight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  presentation: {
    color: COLORS.tertiary,
  },
  smallText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  }
});
