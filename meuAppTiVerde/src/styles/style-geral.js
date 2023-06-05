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
    /* color: #E9DFD6; */
    text-Align: center;
    top: 90;
`;

const MeuTitulo = styled.Text`
        flex: 1;
        color: #3B8528;
        text-Align: center;
        font-Size: 32;
        font-Weight: 400;
        opacity: 70;
        top:70;
`;

const MeuBotaoOQueE = styled.TouchableOpacity`
        right: 90;
        top: 100;
        background-Color: #3B8528;
        width: 138;
        height: 143;
        font-Size: 13;
        border-Radius: 10;
        opacity: 70;
        padding: 10px;
`;

const MeuBotaoBeneficios = styled.TouchableOpacity`
        right: 90;
        top: -12;
        background-Color: #3B8528;
        width: 138;
        height: 143;
        font-Size: 13;
        border-Radius: 10;
        opacity: 70;
        padding: 10px;
`;

const MeuBotaoImplementacao = styled.TouchableOpacity`
        left: 90;
        top: -43;
        background-Color: #3B8528;
        width: 138;
        height: 143;
        font-Size: 13;
        border-Radius: 10;
        opacity: 70;
        padding: 10px;
`;

const MeuBotaoCases = styled.TouchableOpacity`
        left: 90;
        top: -156;
        background-Color: #3B8528;
        width: 138;
        height: 143;
        font-Size: 13;
        border-Radius: 10;
        opacity: 70;
        padding: 10px;
`;

const Cpu = styled.Image`
        flex: 1;
        top: 50;
`;

export {
    Container,
    MeuTexto,
    MeuTitulo,
    MeuBotaoOQueE,
    MeuBotaoBeneficios,
    MeuBotaoImplementacao,
    MeuBotaoCases,
    Cpu
}