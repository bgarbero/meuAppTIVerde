import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const SuperButton = (props) => {
    return(
    <View>
        <TouchableOpacity style={style.botaoOQueE}>
            <Text style={style.oQueE}>
                O que é?
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botaoBeneficios}>
            <Text style={style.beneficios}>
                Benefícios
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botaoImplementacao}>
            <Text style={style.implementacao}>
                Implementação
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.botaoCases}>
            <Text style={style.cases}>
                Cases de Sucesso
            </Text>
        </TouchableOpacity>
    </View>
)}

const style = StyleSheet.create({
    botaoOQueE:{
        right: 90,
        top: 70,
        backgroundColor: '#3B8528',
        padding: 10,
        width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70
    },
    oQueE:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 100,
        justifyContent: 'center'
    },
    botaoBeneficios:{
        right: 90,
        top: 100,
        backgroundColor: '#3B8528',
        padding: 10,
        width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70
    },
    beneficios:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 100,
        justifyContent: 'center'
    },
    botaoImplementacao:{
        left: 90,
        top: -215,
        backgroundColor: '#3B8528',
        padding: 10,
        width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70
    },
    implementacao:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 100,
        justifyContent: 'center'
    },
    botaoCases:{
        left: 90,
        top: -185,
        backgroundColor: '#3B8528',
        padding: 10,
        width: 138,
        height: 143,
        fontSize: 13,
        borderRadius: 10,
        opacity: 70
    },
    cases:{
        textAlign: 'center',
        color: '#E9DFD6',
        top: 90,
        justifyContent: 'center'
    }
})

export default SuperButton;