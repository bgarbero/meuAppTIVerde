import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu } from "../../styles/style-geral";
import PageOqueE from "../PageOqueE";


function Home (){
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')} style={style.imagem}></Cpu>
            <MeuTitulo style={style.homeTitulo}>
                TI Verde
            </MeuTitulo>
            <MeuTexto style={style.apresentacao}>Para programadores que se importam com o futuro</MeuTexto>
        </Container>
    );//aqui iremos retornar um código em jsx
} // criar páginas assim e componentes menores com arrow function

const style = StyleSheet.create({
    apresentacao:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        color: '#3B8528',
        top: 0
    }
})

export default Home;