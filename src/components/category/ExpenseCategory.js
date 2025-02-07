import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import AddCategory from './AddCategory';

export default class ExpenseCategory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddCategory />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
