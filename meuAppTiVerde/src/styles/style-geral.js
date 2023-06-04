import styled from "styled-components/native";

const Container = styled.View`
        flex: 1;
        align-Items: center;
        justify-Content: center;
        background-Color: #E9DFD6;
`;

const MeuTexto = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #E9DFD6;
    text-Align: center;
    top: 90;
`;

const MeuTitulo = styled.Text`
        color: #3B8528;
        text-Align: center;
        font-Size: 32;
        font-Weight: 400;
        opacity: 70;
        top: 120;
`;

const MeuBotao = styled.TouchableOpacity`
        background-Color: #3B8528;
        width: 138;
        height: 143;
        font-Size: 13;
        border-Radius: 10;
        opacity: 70;
        padding: 10px;
`;

export {
    Container,
    MeuTexto,
    MeuTitulo,
    MeuBotao
}