import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import login from './src/pages/Login';
import contato from './src/pages/Contato';
import configuracoes from './src/pages/Configuracoes';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import { createDrawerNavigator  } from '@react-navigation/drawer'; */
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Login'>
      <Tab.Screen
      name='Login'
      component={login}
      options={{
        title: ""
      }}
    />

         <Tab.Screen
         name='Contato'
         component={contato}
         options={{
          headerStyle:{
            backgroundColor: "#3B8528",
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

