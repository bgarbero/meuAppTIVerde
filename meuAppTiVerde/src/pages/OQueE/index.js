import React from "react";
import {Text, StyleSheet, View,Image} from "react-native";
import { Container, MeuTexto, MeuTitulo } from "../../styles/style-geral";

function oQueE(){
    return (
        <Container>
            <MeuTitulo></MeuTitulo>
            <MeuTexto>
                O que é?
            </MeuTexto>
        </Container>
    )
}

export default oQueE;