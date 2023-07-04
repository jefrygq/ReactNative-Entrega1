import { Text, View, Image, Button, TextInput, FlatList, ImageBackground } from 'react-native';

import Header from '../../components/Header/Header';

import screenStyles from '../screenStyles';
import styles from './styles';
import ScreenView from '../ScreenView';
import colors from '../../constants/colors';

export default ScheduledScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;

  return (
    <ScreenView noScroll={true}>
      <ImageBackground source={require('../../assets/icons/box.png')} 
				style={{flex: 1}}
				resizeMode='center' 
				imageStyle={{opacity: 0.2, tintColor: colors.tertiary}}
			>
        <Header title={'Maria Alarcon'} buttonLeft={<Button title={'Perfil'} />} buttonRight={<Button title={'Buscar'} />} />
        <View style={styles.internalContainer}>
          <Text>Today</Text>
        </View>
      </ImageBackground>
    </ScreenView>
  );
}



