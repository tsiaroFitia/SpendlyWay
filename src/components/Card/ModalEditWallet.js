import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../outils/Colors';

export default class ModalEditWallet extends Component {
  state = {
    amount: this.props.amount || '',
    date: this.props.date || '',
    description: this.props.description || '',
  };

  handleEditWallet = () => {
    const { amount, date, description } = this.state;
    console.log('Edited Wallet:', { amount, date, description });
    this.props.closeEditModal();
  };

  closeEditModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible, closeEditModal } = this.props;

    return (
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Wallet</Text>

            {/* Montant */}
            <View style={styles.inputContainer}>
              <Ionicons name="wallet-outline" size={20} color={Colors.BleuFoncé} />
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
              <Ionicons name="calendar-outline" size={20} color={Colors.BleuFoncé} />
              <TextInput
                style={styles.input}
                placeholder="Enter Date"
                value={this.state.date}
                onChangeText={(text) => this.setState({ date: text })}
              />
            </View>

            {/* Boutons */}
            <View style={styles.buttonContainer}>
             
              <TouchableOpacity style={styles.cancelButton} onPress={closeEditModal}>
                <Text style={styles.buttonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.handleEditWallet}>
                <Text style={styles.buttonText}>Edit</Text>
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
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight:'bold',
    color:Colors.BleuFoncé,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BleuFoncé,
    borderRadius: 5,
    padding: 8,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: Colors.JauneFoncé,
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  cancelButton: {
    borderColor: Colors.JauneFoncé,
    borderWidth:1,
    padding: 10,
    borderRadius: 5,
    width: '45%',
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
