import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class ExpenseReport extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Expense Report Content</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    fontSize: 20,
    
  },
});
