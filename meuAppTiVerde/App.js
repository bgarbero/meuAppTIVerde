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
         component={contato}
         options={{
          headerStyle:{
            backgroundColor: "#3B8528"
          }
         }}/>

        <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title:"",
          headerStyle:{
            backgroundColor: "#3B8528"
          }
        }}/>
 
        <Tab.Screen
        name='Configs'
        component={configuracoes}
        options={{
          headerStyle:{
            backgroundColor: "#3B8528"
          }
        }}/>
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
