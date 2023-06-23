import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Quadrado, Cpu } from "../../styles/style-geral";
import styled from "styled-components";

export default function Implementacao(){
    return(
        <Container>
            <Cpu source={require('../../assets/cpu.png')} style={style.imagem}></Cpu>
            <MeuTitulo style={style.homeTitulo}>
                TI Verde
            </MeuTitulo>
            <Quadrado></Quadrado>
            <MeuTitulo style={style.OqueE}>Implementação</MeuTitulo>
            <MeuTexto style={style.apresentacao}>
            O primeiro passo é avaliar os equipamentos presentes na empresa como computadores e ar condicionado por exemplo. Quanto mais antigo o equipamento, maior é o seu consumo de energia. 
            Reduzir o consumo de papel também é importante. Para isso, procura-se trabalhar com armazenamento em nuvem.
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
    OqueE:{
        color: '#E9DFD6',
        flex: 3,
        top: -200
    }
})