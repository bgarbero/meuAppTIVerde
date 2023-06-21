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
        top: 30;
`;

const Cpu = styled.Image`
        /* flex: 3; */
        top: 30;
        width: 150;
        height: 150
`;

const Quadrado = styled.View`
        flex: 4;
        background: #3B8528;
        width: 350px;
        height:450px;
        top: 50;
        border-radius: 10px
`;

export {
    Container,
    MeuTexto,
    MeuTitulo,
    Cpu,
    Quadrado
}