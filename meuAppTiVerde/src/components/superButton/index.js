import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Container, MeuBotao, MeuTexto} from "../../styles/style-geral";

const SuperButton = () => {
    return(
            <View>
                <MeuBotao 
                style={style.botaoOQueE}>
                    <MeuTexto>O que é?</MeuTexto>
                </MeuBotao>

                <MeuBotao 
                style={style.botaoBeneficios}>
                    <MeuTexto>Benefícios</MeuTexto>
                </MeuBotao>

                <MeuBotao 
                style={style.botaoImplementacao}>
                    <MeuTexto>Implementação</MeuTexto>
                </MeuBotao>

                <MeuBotao 
                style={style.botaoCases}>
                    <MeuTexto>Cases de Sucesso</MeuTexto>
                </MeuBotao>
            </View>
)}

const style = StyleSheet.create({
    botaoOQueE:{
        right: 90,
        top: 160,
    },
    botaoBeneficios:{
        right: 90,
        top: 190,
    },
    botaoImplementacao:{
        left: 90,
        top: -125,
    },
    botaoCases:{
        left: 90,
        top: -95,
    }
})

export default SuperButton;