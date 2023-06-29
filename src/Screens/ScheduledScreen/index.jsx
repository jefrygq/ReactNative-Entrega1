import { Text, View, Image, Button, TextInput, FlatList } from 'react-native';

import Header from '../../components/Header/Header';

import screenStyles from '../screenStyles';
import styles from './styles';
import ScreenView from '../ScreenView';

export default ScheduledScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;

  return (
    <ScreenView noScroll={true}>
      <Header title={'Maria Alarcon'} buttonLeft={<Button title={'Perfil'} />} buttonRight={<Button title={'Buscar'} />} />
      <View style={styles.internalContainer}>
        <Text>Today</Text>
      </View>
    </ScreenView>
  );
}



