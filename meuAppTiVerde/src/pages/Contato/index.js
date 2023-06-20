import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo } from "../../styles/style-geral";

function contato(){
    return (
        <Container>
                <MeuTexto style={style.texto}>Autor: Bruno da Silva Garbero</MeuTexto>
                <MeuTexto style={style.texto}>E-mail: bruno_garbero@hotmail.com</MeuTexto>
                <MeuTexto style={style.texto}>Telefone: (24) 99204-9499</MeuTexto> 
        </Container>
    )
}

const style = StyleSheet.create({
    texto:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        top: -110
    },
})

export default contato;