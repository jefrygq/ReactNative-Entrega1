import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(DEVICE_WIDTH * 0.60);
export const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export const styles = StyleSheet.create({
  carouselContainer: {
    width: DEVICE_WIDTH
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
  },
  itemLabelContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.white,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.tertiary,
  },
  itemImage: {
    width: '100%',
    height: ITEM_WIDTH,
    borderRadius: 15,
  }
});
