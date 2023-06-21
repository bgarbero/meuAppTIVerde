import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu, Quadrado } from "../../styles/style-geral";
import PageOqueE from "../PageOqueE";


function Home (){
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')} style={style.imagem}></Cpu>
            <MeuTitulo style={style.homeTitulo}>
                TI Verde
            </MeuTitulo>
            <Quadrado></Quadrado>
            <MeuTitulo style={style.OqueE}>O que é?</MeuTitulo>
            <MeuTexto style={style.apresentacao}>
                TI Verde é um movimento global que visa diminuir os impactos causados pela produção de produtos tecnológicos no meio ambiente.
                Diversas boas práticas são adotadas para isso desde a extração da matéria prima até o armazenamento em nuvem, diminuição de consumo de energia e aumento da
                vida útil dos equipamentos. 
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

export default Home;