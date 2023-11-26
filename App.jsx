import {StyleSheet, View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Axios from 'axios';

export default function App1() {
  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiUrl =
    'https://api.openai.com/v1/engines/text-davinci-002/completions';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    const prompt = textInput;
    const response = await Axios.post(
      apiUrl,
      {
        prompt: prompt,
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
    const text = response.data.choices[0].text;
    setData([
      ...data,
      {type: 'user', text: textInput},
      {type: 'bot', text: text},
    ]);
    setTextInput: '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI ChatBot</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString}
        style={styles.body}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: item.type === 'user' ? 'blue' : 'green',
              }}>
              {item.type === 'use' ? 'User' : 'Bot'}
            </Text>
            <Text />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6c9ff',
    alignItems: 'center',
  },
  title: {
    color: '#870f0f',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 70,
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
