import React from 'react';
import {StyleSheet, Text} from 'react-native';

let nt;
let cor;
let font;

export default function (props) {
  font = parseInt(props.font, 10);
  nt = props.nota;
  cor = props.cor;
  return (
    <Text
      style={StyleSheet.compose(estilos.txt3, {color: cor, fontSize: font})}>
      CFB Cursos - curso de {props.curso} : {nt}
    </Text>
  );
}

const estilos = StyleSheet.create({
  txt1: {
    color: '#f00',
    fontSize: 30,
  },
  txt2: {
    // color: '#00f',
    fontSize: 30,
  },
  txt3: {
    // color: '#0f0',
    fontSize: 20,
  },
});
