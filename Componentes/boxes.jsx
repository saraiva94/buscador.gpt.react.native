import React from 'react';
import {View} from 'react-native';

export default function (props) {
  return (
    <View
      style={{
        width: '100%',
        height: 300,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}>
      <View style={{height: 50, backgroundColor: '#00d'}} />
      <View style={{height: 50, backgroundColor: '#00a'}} />
      <View style={{height: 50, backgroundColor: '#005'}} />
    </View>
  );
}
