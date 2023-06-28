import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  internalContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    padding: 10,
    margin: 10
  },
  image: {
    width: 50,
    height: 50
  }
});
