import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imagesContainer: {
    flex: 1,
    flowDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: COLORS.primary,
    marginRight: 12,

  },
  image: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  infoContainer: {
    flex: 3,
    flowDirection: 'column',
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
