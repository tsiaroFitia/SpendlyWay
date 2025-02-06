import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import HeaderHomeScreen from '../../components/Home/HeaderHomeScreen'

export default class RepportScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderHomeScreen title="Repport"/>
        <Text>RepportScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
  },
})