import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../outils/Colors';


export default class HeaderHomeScreen extends Component {
  render() {
    const { title } = this.props; // Extraction de la prop title
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity>
            <View style={styles.iconContainer}>
               <Ionicons name="list" size={30} style={styles.icon} />
            </View>
                
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BleuFoncé,
        height: 100,
        paddingTop: 30, // Espace sous la barre de statut
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Écarte les éléments
        paddingHorizontal: 20,
        width: '100%',
        position: 'relative', // Permet d'éviter des conflits de positionnement
      },
      icon: {
        color: Colors.JauneFoncé,
      },
      text: {
        fontSize: 20,
        color: Colors.BlancFond,
        fontWeight: 'bold',
      },
})