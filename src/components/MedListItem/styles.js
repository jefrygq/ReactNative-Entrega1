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
    height: 90,
    position: 'relative',
  },
  imageWrapper: {
    padding: 0,
    marginTop: 0,
    width: 80,
    height: 80,
    position: 'absolute',
    top: 0,
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    flex: 1,
    tintColor: COLORS.white,
    backgroundColor: COLORS.tertiary,
    padding: 15,
  },
  placeholderImage: {
    tintColor: COLORS.white,
    width: '100%',
    height: '100%',
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
