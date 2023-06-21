import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo, Quadrado } from "../../styles/style-geral";

function contato(){
    return (
        <Container>
            <Quadrado style={style.rect}></Quadrado>
                <MeuTexto style={style.texto}>Autor: Bruno da Silva Garbero{'\n'}
                E-mail: bruno_garbero@hotmail.com{'\n'}
                Telefone: (24) 99204-9499</MeuTexto> 
        </Container>
    )
}

const style = StyleSheet.create({
    texto:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        top: -100,
        color: '#E9DFD6',
        flex: 3
    },
    rect:{
        flex: 3,
        top: 150
    }
})

export default contato;