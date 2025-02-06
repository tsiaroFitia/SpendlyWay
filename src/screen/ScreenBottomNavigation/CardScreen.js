import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import HeaderHomeScreen from '../../components/Home/HeaderHomeScreen';
import Wallet from '../../components/Card/Wallet';  

export default class CardScreen extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <HeaderHomeScreen title="Card" />
        <Wallet /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
