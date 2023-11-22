import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C1 from './Componentes/comp';
import style from './Css/style';

export default function App1() {
  return (
    <View style={estilos.container}>
      <C1 curso="React Native" nota="In Progress" font="30" />
      <View style={StyleSheet.compose(style.space)} />

      <C1 curso="C++" nota="In Progress" font="28" />
      <View style={StyleSheet.compose(style.space)} />

      <C1 curso="Javascript" nota="In Progress" font="23" />
      <View style={StyleSheet.compose(style.space)} />

      <C1 curso="c#" nota="In Progress" font="30" />
      <View style={StyleSheet.compose(style.space)} />

      <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
      <View style={StyleSheet.compose(style.space)} />
      <Text style={styles.text}>cfbcursos.com.br</Text>
    </View>
  );
}

const styles = {
  text: {
    color: '#2b2bff',
    fontSize: 50,
  },
};

const estilos = StyleSheet.create({
  txt0: {
    color: '#f0f',
    fontSize: 35,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <View>
//   <View>
//     <Text>Trabalho Swamiy</Text>
//     <Text>Curso mobile react-native</Text>
//   </View>
//   <View>
//     <Text>Aula 1</Text>
//     <Text>Github Saraiva</Text>
//   </View>
// </View>
