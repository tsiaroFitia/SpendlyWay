import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import HeaderTitle from '../../components/HeaderTitle'

export default class RepportScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderTitle/>
        <Text>RepportScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
  },
})