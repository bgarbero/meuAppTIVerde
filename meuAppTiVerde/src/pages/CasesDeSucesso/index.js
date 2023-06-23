import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu, Quadrado } from "../../styles/style-geral";

export default function Cases(){
    return (
        <Container>
            <Cpu source={require('../../assets/cpu.png')} style={style.imagem}></Cpu>
            <MeuTitulo style={style.homeTitulo}>
                TI Verde
            </MeuTitulo>
            <Quadrado></Quadrado>
            <MeuTitulo style={style.OqueE}>Cases de Sucesso</MeuTitulo>
            <MeuTexto style={style.apresentacao}>
            - Cisco: recebendo a alcunha de “um dos artilheiros da energia limpa”.{'\n'}
            - Google: promove o uso de energia limpa em suas instalações e apoia diversas causas de energia sustentável.{'\n'}
            - Fujitsu: visa reduzir a emissão de gases em 30% ao ano através de energia alternativa.{'\n'}
            </MeuTexto>
        </Container>
    )
}

const style=StyleSheet.create({
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