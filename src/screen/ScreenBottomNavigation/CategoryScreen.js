import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import HeaderTitle from '../../components/HeaderTitle'
import HeaderHomeScreen from '../../components/Home/HeaderHomeScreen';
import HeaderCategory from '../../components/category/HeaderCategory';

export default class CategoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderHomeScreen title="Category"/>
        <HeaderCategory/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   
  },
})