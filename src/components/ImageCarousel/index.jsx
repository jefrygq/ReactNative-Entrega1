import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel-fg';

import screenStyles from '../../Screens/screenStyles';
import COLORS from '../../constants/colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(DEVICE_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
export default ImageCarousel = ({images}) => {
  console.log('DEVICE_WIDTH, ITEM_WIDTH, ITEM_HEIGHT');
  console.log(DEVICE_WIDTH, ITEM_WIDTH, ITEM_HEIGHT);

  const renderItem = ({item, index}) => {
    return (
      <View style={[screenStyles.card, styles.itemContainer]}>
        <Image style={styles.itemImage} source={{uri: item.uri}} />
        <Text style={styles.itemLabel}>
          { item.title }
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Carousel
        layout={"default"}
        data={images}
        renderItem={renderItem}
        sliderWidth={DEVICE_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  itemLabel: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
});