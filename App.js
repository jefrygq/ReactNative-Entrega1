import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Coder!</Text>
      <Text>____________</Text>
      <Text>This will be a meds tracker in the future! O=</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaa88',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
