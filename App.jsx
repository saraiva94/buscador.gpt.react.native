import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C1 from './Componentes/comp';

export default function App1() {
  return (
    <View style={estilos.container}>
      <C1 />
      <C1 />
      <C1 />
      <C1 />
      <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  txt0: {
    color: '#f0f',
    fontSize: 30,
  },
  container: {
    flex: 1,
    BackgroundColor: '#ffa600',
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
