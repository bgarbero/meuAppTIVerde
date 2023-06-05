import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu } from "../../styles/style-geral";
import SuperButton from "../../components/SuperButton";


function Home ({navigation}){
    const oque = () =>{
        navigation.navigate('OQueE');
    }
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')}></Cpu>
            <MeuTitulo>
                TI Verde
            </MeuTitulo>

        <SuperButton></SuperButton>

        </Container>
    );//aqui iremos retornar um código em jsx
} // criar páginas assim e componentes menores com arrow function

export default Home;