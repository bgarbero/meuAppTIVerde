import styled from "styled-components/native";

const Container = styled.View`
        flex: 1;
        align-Items: 'center';
        justify-Content: 'center';
        background-Color: '#E9DFD6';
`;

const MeuTexto = styled.Text`
    /* font-family: Open Sans; */
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #E9DFD6;
`;

const MeuTitulo = styled.Text`
        color: #3B8528;
        text-Align: center;
        font-Size: 32;
        font-Weight: 400;
        //marginBottom: 100,
        opacity: 70;
        top: 120;
`;

export {
    Container,
    MeuTexto,
    MeuTitulo
}