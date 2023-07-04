import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export default styles = StyleSheet.create({
  item: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  date: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: COLORS.light,
    color: COLORS.white,
    padding: 8,
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  first: {
    shadowColor: COLORS.primary
  },
  banner: {
    width: '100%',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 5,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "Quicksand-Medium",
  },
  upcoming: {
    backgroundColor: COLORS.secondary,
    padding: 5,
    marginTop: 20,
  },
  reminder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
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
    paddingLeft: 10,
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
    fontSize: 16,
    color: COLORS.secondary,
    fontWeight: 'bold',
  }
});
