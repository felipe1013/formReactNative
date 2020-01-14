import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/component/Form';
import Card from './src/component/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Form></Form>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
