import { Text, View, StyleSheet} from 'react-native'
import React, { Component } from 'react'
import Colors from '../../outils/Colors';

import AddCategory from './AddCategory';

export default class IncomeCategory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddCategory />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})