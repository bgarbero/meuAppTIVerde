import React from "react";
import {Text, StyleSheet, View} from "react-native";
import SuperButton from "../../components/superButton";

function Home (){
    return (
        <View style={style.home}>
            <Text style={style.titulo}>
                TI Verde
            </Text>

        <SuperButton></SuperButton>

        </View>
    );//aqui iremos retornar um código em jsx
} // criar páginas assim e componentes menores com arro function

const style = StyleSheet.create({
    home:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E9DFD6'
    },
    titulo:{
        color: '#3B8528',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '400',
        //marginBottom: 100,
        opacity: 70,
        top: 120
    }
});

export default Home;