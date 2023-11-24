import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import style from './Css/style';
import box from './Componentes/boxes';
import Boxes from './Componentes/boxes';

export default function App1() {
  return (
    <View style={estilos.container}>
      <Boxes />
      <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
      <View style={StyleSheet.compose(style.space)} />
      <Text style={styles.text}>cfbcursos.com.br</Text>
    </View>
  );
}

const styles = {
  text: {
    color: '#2b59ff',
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
