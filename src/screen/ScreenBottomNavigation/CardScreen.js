import { Text, View , StyleSheet} from 'react-native'
import React, { Component } from 'react'

import Colors from '../../outils/Colors';
import FontText from '../../outils/FontText';
import HeaderTitle from '../../components/HeaderTitle';

export default class CardScreen extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <HeaderTitle/>
        <Text>CardScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container:{
     alignItems:'center',
     justifyContent:'center',
   },
})