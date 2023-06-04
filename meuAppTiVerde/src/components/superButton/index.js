import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Container, MeuBotaoOQueE, MeuBotaoBeneficios, MeuBotaoImplementacao, MeuBotaoCases, MeuTexto} from "../../styles/style-geral";
import { NavigationContainer } from '@react-navigation/native';

const SuperButton = () => {
    return(
            <View>
                <MeuBotaoOQueE>
                    <MeuTexto>O que é?</MeuTexto>
                </MeuBotaoOQueE>
            </View>
)};

export default SuperButton;