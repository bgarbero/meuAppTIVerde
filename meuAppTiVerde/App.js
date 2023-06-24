import 'react-native-gesture-handler';
/* import 'react-native-reanimated' */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';
import contato from './src/pages/Contato';
import configuracoes from './src/pages/Configuracoes';
import PageOqueE from './src/pages/PageOqueE';
import Implementacao from './src/pages/Implementacao';
import Beneficios from './src/pages/Beneficios';
import Cases from './src/pages/CasesDeSucesso';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import { createDrawerNavigator } from '@react-navigation/drawer'; */
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
/* const Drawer = createDrawerNavigator(); */

const TabNavigate = () => {
  return (
  <Tab.Navigator initialRouteName='Home'>

         <Tab.Screen
         name='Contato'
         component={contato}
         options={{
          headerStyle:{
            backgroundColor: "#3B8528",
          }
         }}/>

      <Tab.Screen
        name='Implementacao'
        component={Implementacao}
        options={{
          title:"Implementação",
          headerStyle:{
            backgroundColor: "#3B8528"
          }
        }}/>

      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title:"O que é?",
          headerStyle:{
            backgroundColor: "#3B8528"
          }
        }}/>

    <Tab.Screen
        name='Beneficios'
        component={Beneficios}
        options={{
          title:"Benefícios",
          headerStyle:{
            backgroundColor: "#3B8528"
          }
        }}/>

    <Tab.Screen
        name='Cases'
        component={Cases}
        options={{
          title:"Cases",
          headerStyle:{
            backgroundColor: "#3B8528"
          }
        }}/>
      </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigate></TabNavigate>
    </NavigationContainer>
  );
}

