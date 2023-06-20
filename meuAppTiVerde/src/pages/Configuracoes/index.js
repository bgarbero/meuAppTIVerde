import React from "react";
import {Text, StyleSheet, View, Image, Linking} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu } from "../../styles/style-geral";

function configuracoes(){
    return (
        <Container>
            <MeuTexto style={style.config}>Bibliografia:</MeuTexto>
            <MeuTexto style={style.config}>https://www.mjvinnovation.com/pt-br/blog/o-que-e-ti-verde-e-por-que-devemos-investir-nisso/</MeuTexto>
            <MeuTexto style={style.config}>https://fia.com.br/blog/tecnologia-verde/</MeuTexto>
            <MeuTexto style={style.config}>https://www.totvs.com/blog/gestao-agricola/tecnologia-verde/</MeuTexto>
            <MeuTexto style={style.config}>https://www.pensamentoverde.com.br/sustentabilidade/voce-sabe-o-que-e-ti-verde/</MeuTexto>
        </Container>
    )
}

const style = StyleSheet.create({
    config:{
        alignItems: "center", 
        justifyContent: "center",
        top: -110
    }
})

export default configuracoes;