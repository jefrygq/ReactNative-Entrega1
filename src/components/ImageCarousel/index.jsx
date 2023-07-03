import { View, Image, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel-fg';

import screenStyles from '../../Screens/screenStyles';
import { styles, DEVICE_WIDTH, ITEM_WIDTH, ITEM_HEIGHT } from './styles';

export default ImageCarousel = ({images, mini}) => {
  // console.log('DEVICE_WIDTH, ITEM_WIDTH, ITEM_HEIGHT');
  // console.log(DEVICE_WIDTH, ITEM_WIDTH, ITEM_HEIGHT);

  const renderItem = ({item, index}) => {
    return (
      <View style={[screenStyles.card, styles.itemContainer]}>
        <Image style={styles.itemImage} source={{uri: item.uri}} />
        <View style={styles.itemLabelContainer}>
          <Text style={styles.itemLabel}>
            { item.title }
          </Text>
        </View>
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
