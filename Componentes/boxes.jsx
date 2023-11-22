import React from 'react';
import {View} from 'react-native';

export default function (props) {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: '#00d'}} />
      <View style={{width: 50, height: 50, backgroundColor: '#00a'}} />
      <View style={{width: 50, height: 50, backgroundColor: '#005'}} />
    </View>
  );
}
