import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Container, MeuBotao, MeuTexto } from "../../styles/style-geral";

const SuperButton = () => {
    return(
    <View>
        <MeuBotao style={style.botaoOQueE}>
            <MeuTexto style={style.textButton}>
                O que é?
            </MeuTexto>
        </MeuBotao>

        <MeuBotao style={style.botaoBeneficios}>
            <MeuTexto style={style.textButton}>
                Benefícios
            </MeuTexto>
        </MeuBotao>

        <MeuBotao style={style.botaoImplementacao}>
            <MeuTexto style={style.textButton}>
                Implementação
            </MeuTexto>
        </MeuBotao>

        <MeuBotao style={style.botaoCases}>
            <MeuTexto style={style.textButton}>
                Cases de Sucesso
            </MeuTexto>
        </MeuBotao>
    </View>
)}

const style = StyleSheet.create({
    botaoOQueE:{
        right: 90,
        top: 160,
 /*        backgroundColor: '#3B8528', */
        padding: 10,
/*         width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70 */
    },
 /*    oQueE:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 100,
        justifyContent: 'center'
    }, */
    botaoBeneficios:{
        right: 90,
        top: 190,
       /*  backgroundColor: '#3B8528', */
        padding: 10,
 /*        width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70 */
    },
/*     beneficios:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 100,
        justifyContent: 'center'
    }, */
    botaoImplementacao:{
        left: 90,
        top: -125,
        /* backgroundColor: '#3B8528', */
        padding: 10,
/*         width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 200 */
    },
/*     implementacao:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 100,
        justifyContent: 'center'
    }, */
    botaoCases:{
        left: 90,
        top: -95,
        /* backgroundColor: '#3B8528', */
        padding: 10,
/*         width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70 */
    },
    textButton:{
        textAlign: 'center',
        /* color: '#E9DFD6', */
        top: 90,
        /* justifyContent: 'center' */
    }
})

export default SuperButton;