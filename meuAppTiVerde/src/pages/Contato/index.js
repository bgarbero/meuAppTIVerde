import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Quadrado, Cpu } from "../../styles/style-geral";

function contato(){
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')} style={style.imagem}></Cpu>
            <MeuTitulo style={style.homeTitulo}>
                TI Verde
            </MeuTitulo>
            <Quadrado></Quadrado>
            <MeuTitulo style={style.titulo}>Contato</MeuTitulo>
            <MeuTexto style={style.apresentacao}>
            Bruno da Silva Garbero{'\n'}
                bruno_garbero@hotmail.com{'\n'}
                +55 24 99204-9499
            </MeuTexto>
        </Container>
    );//aqui iremos retornar um código em jsx
} // criar páginas assim e componentes menores com arrow function

const style = StyleSheet.create({
    apresentacao:{
        flex: 3,
        alignContent: "center",
        justifyContent: "center",
        color: '#E9DFD6',
        top: -170,
        width: 350,
        fontSize: 20
    },
    titulo:{
        color: '#E9DFD6',
        flex: 3,
        top: -200
    }
})

export default contato;