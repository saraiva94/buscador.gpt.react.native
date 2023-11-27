import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

export default function App1() {
  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/completions';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt: textInput,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );
      if (
        response &&
        response.data &&
        response.data.choices &&
        response.data.choices[0]
      ) {
        const text = response.data.choices[0].text;
        setData([
          ...data,
          {type: 'user', text: textInput},
          {type: 'bot', text: text},
        ]);
      }
    } catch (error) {
      console.log(error); // Registrar o objeto de erro completo no console

      if (error.response) {
        console.error(
          'Erro de resposta:',
          error.response.status,
          error.response.data,
        );
      } else if (error.request) {
        console.error('Erro de requisição:', error.request);
      } else {
        console.error('Erro:', error.message);
      }
    }
    setTextInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI ChatBot</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({item}) => (
          <View
            style={
              item.type === 'user' ? styles.userMessage : styles.botMessage
            }>
            <Text style={styles.messageText}>
              {item.type === 'user' ? 'User: ' : 'Bot: '}
              {item.text}
            </Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={text => setTextInput(text)}
        placeholder="Ask me anything"
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c395ec92',
    alignItems: 'center',
  },
  title: {
    color: '#6a03ca',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 70,
  },
  body: {
    width: '100%',
    marginBottom: 10,
  },
  userMessage: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-end',
  },
  botMessage: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
  },
  messageText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
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
});
