import { Text, View, Image, Button, TextInput, FlatList } from 'react-native';

import Header from '../../components/Header/Header';
import MedsList from '../../components/MedsList/MedsList';

import screenStyles from '../screenStyles';
import styles from './styles';

export default ScheduledScreen = ({ route, navigation }) => {
	/* Get the params */
	// const { itemId, otherParam } = route.params;

  return (
    <View style={screenStyles.screenContainer}>
      <Header title={'Maria Alarcon'} buttonLeft={<Button title={'Perfil'} />} buttonRight={<Button title={'Buscar'} />} />
      <View style={styles.internalContainer}>
        <Text>Today</Text>
        <MedsList meds={[]} />
      </View>
    </View>
  );
}



