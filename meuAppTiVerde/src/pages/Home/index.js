import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import { Container, MeuTexto, MeuTitulo } from "../../styles/style-geral";
import SuperButton from "../../components/SuperButton";

function Home (){
    return (
        <Container>
            <MeuTitulo>
                TI Verde
            </MeuTitulo>

        <SuperButton></SuperButton>

        </Container>
    );//aqui iremos retornar um código em jsx
} // criar páginas assim e componentes menores com arrow function

export default Home;