import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import SuperButton from "../../components/superButton";
import { Container, MeuTexto, MeuTitulo } from "../../styles/style-geral";

function Home (){
    return (
        <Container style={style.home}>
            <MeuTitulo style={style.titulo}>
                TI Verde
            </MeuTitulo>

        <SuperButton></SuperButton>

        </Container>
    );//aqui iremos retornar um código em jsx
} // criar páginas assim e componentes menores com arro function

const style = StyleSheet.create({
    home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E9DFD6'
    },
/*      titulo:{
        color: '#3B8528',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '400',
        //marginBottom: 100,
        opacity: 70,
        top: 120
    }, */
});

export default Home;