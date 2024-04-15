import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './src/bai1';
import Bai2 from './src/bai2';
import Bai3 from './src/bai3';
import Bai4 from './src/bai4';
import Bai5 from './src/bai5';
import Bai6 from './src/bai6';
import Bai7 from './src/bai7';
import Bai8 from './src/bai8';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Bai1/>
      <Bai2/>
      <Bai3/>
      <Bai4/>
      <Bai5/>
      <Bai6/>
      <Bai7/>
      <Bai8/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
