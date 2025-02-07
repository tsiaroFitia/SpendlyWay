import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../outils/Colors';

export default class ModalAddWallet extends Component {
  state = {
    amount: '',
    date: '',
    description: '',
  };

  handleAddWallet = () => {
    const { amount, date, description } = this.state;
    // eto ny Logique pour ajouter le portefeuille
    console.log('Added Wallet:', { amount, date, description });
    this.props.closeAddModal(); // Ferme le modal après l'ajout
  };
  closeAddModal = () => {
    this.setState({ modalVisible: false });
  };
  

  render() {
    const { modalVisible, closeAddModal } = this.props;
    return (
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Wallet Entry</Text>

            {/* Montant */}
            <View style={styles.inputContainer}>
              <Ionicons name="cash-outline" size={24} color={Colors.BleuFoncé} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Amount"
                value={this.state.amount}
                onChangeText={(text) => this.setState({ amount: text })}
                keyboardType="numeric"
              />
            </View>

            {/* Date */}
            <View style={styles.inputContainer}>
              <Ionicons name="calendar-outline" size={24} color={Colors.BleuFoncé} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Date (DD/MM/YYYY)"
                value={this.state.date}
                onChangeText={(text) => this.setState({ date: text })}
              />
            </View>

            {/* Description */}
            <View style={styles.inputContainer}>
              <Ionicons name="document-text-outline" size={24} color={Colors.BleuFoncé} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter Description"
                value={this.state.description}
                onChangeText={(text) => this.setState({ description: text })}
              />
            </View>

            {/* Boutons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={closeAddModal}>
                <Text style={styles.buttonText1}>Cancel</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.addButton} onPress={this.handleAddWallet}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              
            </View>
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
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color:Colors.BleuFoncé,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BleuFoncé,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
    width: '100%',
    height:50,
  },
  icon: {
    marginRight: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:Colors.JauneFoncé,
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  addButton: {
    backgroundColor: Colors.JauneFoncé,
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  buttonText1: {
    color: Colors.JauneFoncé,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
});
