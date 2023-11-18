import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default () => {
  return <Text style={estilos.txt3}>CFB Cursos - curso de react native</Text>;
};

const estilos = StyleSheet.create({
  txt1: {
    color: '#f00',
    fontSize: 30,
  },
  txt2: {
    color: '#00f',
    fontSize: 30,
  },
  txt3: {
    color: '#0f0',
    fontSize: 30,
  },
});
