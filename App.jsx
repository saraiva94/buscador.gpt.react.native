import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C1 from './Componentes/comp';

export default function App1() {
  return (
    <View style={estilos.container}>
      <C1 curso="React Native" nota="undefined" cor="#ff0" font="30" />
      <C1 curso="C++" nota="undefined" cor="#0f0" font="30" />
      <C1 curso="Javascript" nota="undefined" cor="#0ff" font="25" />
      <C1 curso="c#" nota="undefined" cor="#f00" font="32" />
      <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
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
