import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../outils/Colors';

export default class Wallet extends Component {
    state = {
        showMonney: true,
      };
    
      toggleMonneyVisibility = () => {
        this.setState((prevState) => ({
          showMonney: !prevState.showMonney,
        }));
      };
  render() {
    const { showMonney } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.monney}>
          <View style={styles.walletInfo}>
            <View style={styles.walletText}>
                <Text style={styles.walletTitle}>Wallet</Text>
                <Text style={styles.balance}>{showMonney ? '0,00' : '***'}</Text>

            </View>
             <TouchableOpacity
                          style={styles.iconWrapper}
                          onPress={this.toggleMonneyVisibility}
                        >
                          <Ionicons
                            name={showMonney ? 'eye' : 'eye-off'}
                            size={30}
                            color={Colors.BleuFoncé}
                          />
             </TouchableOpacity>
            </View>

          
            {/* Add and Edit Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={this.handleAddPress}>
                    <Ionicons name="add-circle-outline" size={24} color={Colors.BleuFoncé} style={{marginLeft:10,}}/>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.handleEditPress}>
                    <Ionicons name="create-outline" size={24} color={Colors.BleuFoncé}  style={{marginLeft:10,}}/>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    top: 10,
  },
  monney: {
    padding:20,
    width: '85%',
    height: '30%',
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingHorizontal: 20,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5, // Légère ombre pour plus de profondeur
    elevation: 3,
  },
  walletInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  walletText:{
    flexDirection: 'column',
  },
  walletTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BleuFoncé,
  },
  iconWrapper: {
      backgroundColor: Colors.JauneFoncé,
      borderRadius: 25,
      padding: 8,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.BleuFoncé,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width:'42%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.JauneFoncé,
    padding: 10,
    borderRadius: 10,
    margin:5,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.BleuFoncé,
    marginLeft: 15,
  },
});
