import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App2() {
  const [altura, setAltura] = useState('');
  const [genero, setGenero] = useState('');
  const [pesoIdealResult, setPesoIdealResult] = useState('');

  const calcularPesoIdeal = () => {
    let pesoIdeal;

    if (genero.toLowerCase() === 'masculino') {
      pesoIdeal = 72.7 * parseFloat(altura) - 58;
    } else if (genero.toLowerCase() === 'feminino') {
      pesoIdeal = 62.1 * parseFloat(altura) - 44.7;
    } else {
      console.error(
        'Gênero não reconhecido. Por favor, insira "masculino" ou "feminino".',
      );
      return;
    }

    setPesoIdealResult(pesoIdeal.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Peso Ideal</Text>
      <Text style={styles.title2}>Digite a altura abaixo</Text>

      <TextInput
        style={styles.input}
        value={altura.toString()}
        onChangeText={text => setAltura(text)}
        placeholder="Altura (em metros)"
        keyboardType="numeric"
      />
      <Text style={styles.title2}>Escolha o sexo</Text>
      <TextInput
        style={styles.input}
        value={genero}
        onChangeText={text => setGenero(text)}
        placeholder="Gênero (masculino ou feminino)"
      />
      <TouchableOpacity style={styles.button} onPress={calcularPesoIdeal}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {pesoIdealResult ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Peso Ideal:</Text>
          <Text style={styles.result}>{pesoIdealResult} kg</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c395ec92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#6a03ca',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title2: {
    color: '#000000',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  resultContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  result: {
    fontSize: 18,
    color: 'black',
  },
});
