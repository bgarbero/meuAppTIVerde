import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    //<View>
      //<StatusBar style="auto" />

      <Home></Home>

    //</View>
  );
}

const styles = StyleSheet.create({
  //container: {
    //flex: 1,
   // backgroundColor: '#E9DFD6',
    //alignItems: 'center',
    //justifyContent: 'center'
  //},
});
