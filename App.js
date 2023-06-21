import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store'
import MainNavigation from './src/navigation';

export default App = () => {
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./src/assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./src/assets/fonts/Quicksand-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
  );
};