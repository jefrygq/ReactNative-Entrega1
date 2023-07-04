import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import screenStyles from '../../Screens/screenStyles';
import COLORS from '../../constants/colors';

export default ImagesStack = ({images}) => {
    const stack = images.map((image, index) => {
      const removeOpacity = 0.42 * index;

      return (
        <View
          key={index} 
          style={{
            ...screenStyles.card,
            ...styles.imageWrapper, 
            opacity: 1 - removeOpacity,
            left: index * 8,
            // top: index * 8,
            elevation: 15 - index*2,
            zIndex: 5 - index,
          }}
        >
          <Image style={styles.image} source={{uri: image}} />
        </View>
      );
    });

    const content = images.length > 0 ? stack :
      <View
        style={{
        ...screenStyles.card,
        ...styles.imageWrapper,
        elevation: 15,
      }}>
        <View style={styles.placeholder}>
          <Image style={styles.placeholderImage} source={require('../../assets/icons/pills.png')} />
        </View>
      </View>;

    return content;
}

const styles = StyleSheet.create({
  imageWrapper: {
    padding: 0,
    marginTop: 0,
    width: 80,
    height: 80,
    position: 'absolute',
    top: 0,
    // borderRadius: 15,
    overflow: 'hidden',
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
});