import React from "react";
import {Text, StyleSheet, View, Image, Linking} from "react-native";
import { Container, MeuTexto, MeuTitulo, Cpu, Quadrado } from "../../styles/style-geral";
function configuracoes(){
    return (
        <Container>
            <Quadrado></Quadrado>
            <MeuTitulo style={style.biblio}>Bibliografia:</MeuTitulo>
            <MeuTexto style={style.config}
            onPress={() => { 
            Linking.openURL(' https://www.mjvinnovation.com/pt-br/blog/o-que-e-ti-verde-e-por-que-devemos-investir-nisso/'); 
            }}>
            https://www.mjvinnovation.com/pt-br/blog/o-que-e-ti-verde-e-por-que-devemos-investir-nisso/{'\n'}
            https://fia.com.br/blog/tecnologia-verde/{'\n'}
            https://www.totvs.com/blog/gestao-agricola/tecnologia-verde/{'\n'}
            https://www.pensamentoverde.com.br/sustentabilidade/voce-sabe-o-que-e-ti-verde/
            </MeuTexto>
        </Container>
    )
}

const style = StyleSheet.create({
    config:{
        flex: 3,
        alignContent: "center",
        justifyContent: "center",
        color: '#E9DFD6',
        top: -250,
        width: 350,
    },
    biblio:{
        color: '#E9DFD6',
        flex: 2,
        top: -250
    }
})

export default configuracoes;