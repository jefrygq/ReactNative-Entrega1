import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export default styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0
  },
  imagesContainer: {
    flex: 1,
    height: 80,
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
    fontFamily: "Quicksand-Bold",
  },
  presentation: {
    color: COLORS.tertiary,
  },
  smallText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  }
});
