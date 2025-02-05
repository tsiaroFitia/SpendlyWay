import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../outils/Colors';

export default class HeaderTitle extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="menu" size={30} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text}>SpendlyWay</Text>

        </View>
   
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        paddingTop: 30, // Espace sous la barre de statut
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Écarte les éléments
        paddingHorizontal: 20,
        width: '60%',
        position: 'relative', // Permet d'éviter des conflits de positionnement
      },
      icon: {
        color: Colors.vert1,
      },
      text: {
        fontSize: 20,
        color: Colors.vert1,
        fontWeight: 'bold',
      },
})