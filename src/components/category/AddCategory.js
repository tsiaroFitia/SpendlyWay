import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../outils/Colors';
import ModalAddCategory from './ModalAddCategory';

export default class AddCategory extends Component {
  state = {
    modalVisible: false,
  };

  openFormModal = () => {
    this.setState({ modalVisible: true });
  };

  closeFormModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity style={styles.button} onPress={this.openFormModal}>
                <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color={Colors.BleuFoncé}
                      style={{ marginLeft: 10 }}
                />
                <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* ModalAddCategory */}
        <ModalAddCategory modalVisible={modalVisible} onCloseModal={this.closeFormModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  headercontent: {
    flexDirection: 'row',
  },
 button: {
     width: '42%',
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: Colors.JauneFoncé,
     padding: 10,
     borderRadius: 10,
     margin: 5,
   },
   buttonText: {
     fontSize: 16,
     color: Colors.BleuFoncé,
     marginLeft: 15,
   },
});
