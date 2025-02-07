import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../outils/Colors';
import Icone from './ImportIcone/Icone';

export default class ModalAddCategory extends Component {
  state = {
    iconModalVisible: false,
    name: '',
    selectedIcon: '',
  };

  openIconModal = () => {
    this.setState({ iconModalVisible: true });
  };

  closeIconModal = () => {
    this.setState({ iconModalVisible: false });
  };

  handleIconSelect = (iconName) => {
    this.setState({ selectedIcon: iconName });
    this.closeIconModal();
  };

  saveData = () => {
    const { name, selectedIcon } = this.state;
    console.log('Category Name:', name);
    console.log('Selected Icon:', selectedIcon);
    this.props.onCloseModal();
  };

  render() {
    const { modalVisible, onCloseModal } = this.props;
    const { iconModalVisible, name, selectedIcon } = this.state;

    return (
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add a New Category</Text>

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Ionicons name="pricetag-outline" size={25} color={Colors.BleuFoncé} style={{left:5,}}/>
              <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={(text) => this.setState({ name: text })}
              />
            </View>

            {/* Select Icon Button */}
            <TouchableOpacity style={styles.iconSelectButton} onPress={this.openIconModal}>
                {selectedIcon ? 
                    <Ionicons name={`${selectedIcon}`} size={25} color={Colors.BleuFoncé} style={{left: 5}} /> 
                    : 
                    <SimpleLineIcons name='emotsmile' size={25} color={Colors.BleuFoncé} style={{left: 5}} />
                }
                <Text style={styles.iconSelectText}>Choose an Icon</Text>
            </TouchableOpacity>

 
            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={onCloseModal}>
                <Text style={styles.buttonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.saveData}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Icon Selection Modal */}
          <Modal transparent={true} visible={iconModalVisible} animationType="slide" onRequestClose={this.closeIconModal}>
            <Icone closeIconeModal={this.closeIconModal} handleIconSelect={this.handleIconSelect} />
          </Modal>
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
    fontWeight: 'bold',
    color: Colors.BleuFoncé,
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
    left:10,
  },
  iconSelectButton: {
    flexDirection: 'row',  
    alignItems: 'center',  
    borderWidth: 1,
    borderColor: Colors.BleuFoncé,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
    height: 55,
  },
  iconSelectText: {
    color: Colors.BleuFoncé,
    marginLeft: 22, 
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
    borderWidth: 1,
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
