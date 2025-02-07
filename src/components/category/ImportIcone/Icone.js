import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../outils/Colors';

const icons = [
  'medkit-outline', 'heart-outline', 'bandage-outline',
  'thermometer-outline', 'pulse-outline', 'eyedrop-outline',
  'water-outline', 'fitness-outline', 'cafe-outline', 'cart-outline',
  'pricetag-outline', 'cut-outline', 'tv-outline', 'bus-outline',
  'flame-outline', 'cash-outline', 'wallet-outline',
  'home-outline', 'briefcase-outline', 'rocket-outline',
  'trophy-outline', 'gift-outline', 'people-outline', 'fast-food-outline',
  'pizza-outline', 'shirt-outline', 'videocam-outline',
  'card-outline', 'car-outline', 'shield-checkmark-outline',
  'calendar-outline', 'stats-chart-outline', 'school-outline', 'leaf-outline',
];

export default class Icone extends Component {
  render() {
    const { closeIconeModal, handleIconSelect, modalVisible } = this.props;

    return (
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {icons.map((iconName, index) => (
                <TouchableOpacity key={index} style={styles.item} onPress={() => handleIconSelect(iconName)}>
                  <Icon name={iconName} size={25} color={Colors.white} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BackGroundModal,
  },
  container: {
    width: '80%',  
    height:285,
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerIconcategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
  },
  headertitle: {
    fontSize: 18, // Ajuste la taille du texte pour le rendre plus uniforme
    fontWeight: 'bold',
    color: Colors.BleuFoncé,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  item: {
    width: 40,  // Taille similaire à celle du bouton dans ModalAddCategory
    height: 40,  // Taille uniforme
    borderRadius: 20,
    backgroundColor: Colors.BleuClair,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
