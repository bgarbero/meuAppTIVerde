import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import contato from './src/pages/Contato';
import configuracoes from './src/pages/Configuracoes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
         <Tab.Screen
         name='Contato'
         component={contato}/>

        <Tab.Screen
        name='Home'
        component={Home}/>
 
        <Tab.Screen
        name='Configs'
        component={configuracoes}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9DFD6',
    alignItems: 'center',
    justifyContent: 'center'
  },
}); */
