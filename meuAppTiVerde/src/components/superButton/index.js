import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { Container, MeuBotaoBeneficios, MeuBotaoCases, MeuBotaoImplementacao, MeuBotaoOQueE, MeuTexto} from "../../styles/style-geral";
import { NavigationContainer } from '@react-navigation/native';

const SuperButton = () => {
    return(
            <View>
                <MeuBotaoOQueE
                /* onPress={props.acao} */>
                    <MeuTexto>O que é?</MeuTexto>
                </MeuBotaoOQueE>

                <MeuBotaoImplementacao>
                    <MeuTexto>Implementação</MeuTexto>
                </MeuBotaoImplementacao>

                <MeuBotaoBeneficios>
                    <MeuTexto>Benefícios</MeuTexto>
                </MeuBotaoBeneficios>

                <MeuBotaoCases>
                    <MeuTexto>Cases de Sucesso</MeuTexto>
                </MeuBotaoCases>
            </View>

)};

export default SuperButton;