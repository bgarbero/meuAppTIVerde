import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Quadrado, Cpu } from "../../styles/style-geral";

export default function Beneficios(){
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')} style={style.imagem}></Cpu>
            <MeuTitulo style={style.homeTitulo}>
                TI Verde
            </MeuTitulo>
            <Quadrado></Quadrado>
            <MeuTitulo style={style.titulo}>Benefícios</MeuTitulo>
            <MeuTexto style={style.apresentacao}>
            - Redução de custos{'\n'}
            - Aumento do valor de mercado{'\n'}
            - Maior produtividade {'\n'}
            - Modernização{'\n'}
            - Conservação da natureza para as próximas gerações{'\n'}
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
        top: -200,
        width: 350,
        /* height: 450 */
    },
    titulo:{
        color: '#E9DFD6',
        flex: 3,
        top: -200
    }
})