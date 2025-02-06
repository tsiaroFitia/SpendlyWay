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
    // Logique pour ajouter le portefeuille
    console.log('Added Wallet:', { amount, date, description });
    this.props.closeModal(); // Ferme le modal après l'ajout
  };

  render() {
    const { modalVisible, closeModal } = this.props;
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
              <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Cancel</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BleuFoncé,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    marginRight: 10,
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
    backgroundColor: 'gray',
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
  buttonText: {
    color: Colors.BleuFoncé,
    textAlign: 'center',
    fontSize: 16,
  },
});
