import {react} from 'react';
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu } from "../../styles/style-geral";
import { TextInput } from 'react-native-gesture-handler';

function login({navigation}){
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')}></Cpu>
            <MeuTitulo>
                TI Verde
            </MeuTitulo>
            <MeuTexto sytle={style.input}>Digite seu nome</MeuTexto>
            <TextInput></TextInput>
        </Container>
    )
}

const style = StyleSheet.create({
    input:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        color: '#3B8528',
        top: 0
    }
})
export default login;