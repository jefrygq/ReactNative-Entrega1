import * as ImagePicker from 'expo-image-picker';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useEffect, useState } from 'react';
import { styles } from './styles';
import screenStyles from '../../Screens/screenStyles';

export default ImageSelector = ({title, imageUri, onImage}) => {
  const [pickedUri, setPickedUri] = useState('');

  useEffect(() => {
    // console.log('imageUri');
    // console.log(imageUri);
    if (imageUri) {
      setPickedUri(imageUri);
    }
  }, [imageUri]);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Ok' }]
      );
      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermissions();

    if(!hasPermission) {
      return;
    }

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8
    });

    setPickedUri(image.assets[0].uri);
    onImage(image.assets[0].uri);
  }
  

  return (
    <View style={[styles.selectorContainer, screenStyles.shadow]}>
      <TouchableOpacity style={styles.image} onPress={handleTakeImage}>
        <View style={styles.preview}>
          {pickedUri ? (
            <Image style={styles.image} source={{uri: pickedUri}} />
          ) : (
            <View style={styles.previewTextContainer}>
              <Ionicons style={styles.previewText} name="camera" size={30} color={'#ccc'} />
              <Text style={styles.previewText}>Take</Text>
              <Text style={{...styles.previewText, fontWeight: 'bold'}}>{title}</Text>
              <Text style={styles.previewText}>Picture</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}