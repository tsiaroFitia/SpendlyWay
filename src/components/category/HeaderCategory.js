import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import Colors from '../../outils/Colors';  // Assurez-vous que Colors.BleuFoncé est bien défini dans votre fichier Colors.
import IncomeCategory from './IncomeCategory';  // Assurez-vous que IncomeCategory est bien importé.
import ExpenseCategory from './ExpenseCategory';  // Assurez-vous que ExpenseCategory est bien importé.

export default class HeaderCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: null,  // Gère quel bouton est sélectionné
    };
  }

  handleButtonPress = (buttonName) => {
    // Change le bouton sélectionné ou le réinitialise si déjà sélectionné
    this.setState({
      selectedButton: buttonName === this.state.selectedButton ? null : buttonName,
    });
  };

  render() {
    const { selectedButton } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Category</Text>
        
        {/* Conteneur des boutons alignés côte à côte */}
        <View style={styles.buttonContainer}>
          {/* Premier bouton - Income */}
          <TouchableOpacity 
            onPress={() => this.handleButtonPress('Income')} 
            activeOpacity={0.7}  // Ajoutez un effet de pression
            style={styles.button}>
            <Text style={[styles.buttonText, selectedButton === 'Income' && { color: Colors.BleuFoncé }]}>
              Income
            </Text>
            {/* Afficher la ligne tsipika uniquement si 'Income' est sélectionné */}
            {selectedButton === 'Income' && <View style={styles.tsipika} />}
          </TouchableOpacity>

          {/* Deuxième bouton - Expense */}
          <TouchableOpacity 
            onPress={() => this.handleButtonPress('Expense')} 
            activeOpacity={0.7}  // Ajoutez un effet de pression
            style={styles.button}>
            <Text style={[styles.buttonText, selectedButton === 'Expense' && { color: Colors.BleuFoncé }]}>
              Expense
            </Text>
            {/* Afficher la ligne tsipika uniquement si 'Expense' est sélectionné */}
            {selectedButton === 'Expense' && <View style={styles.tsipika} />}
          </TouchableOpacity>
        </View>

        {/* Affichage conditionnel des composants en fonction du bouton sélectionné */}
        {selectedButton === 'Income' && (
          <View style={styles.componentContainer}>
            <IncomeCategory /> {/* Composant Income */}
          </View>
        )}
        {selectedButton === 'Expense' && (
          <View style={styles.componentContainer}>
            <ExpenseCategory /> {/* Composant Expense */}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: Colors.white,  // Fond blanc
    flex: 1,  // Prendre toute la hauteur disponible
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.BleuFoncé,  // Couleur du texte du header
  },
  buttonContainer: {
    flexDirection: 'row',  // Alignement horizontal
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,  // Espacement entre les boutons et le composant
  },
  button: {
    paddingVertical: 15,
    margin: 5,
    flex: 1,
    alignItems: 'center',  // Centrer le texte dans le bouton
    justifyContent: 'center',  // S'assurer que le texte est bien centré
    borderWidth: 1,  // Ajout d'un border pour tester si le bouton est bien visible
    borderColor: Colors.BleuFoncé,  // Ajout de couleur de bordure pour la visibilité
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',  // Text noir par défaut pour qu'il soit visible
  },
  tsipika: {
    height: 2,
    backgroundColor: Colors.BleuFoncé,  // Couleur de la ligne
    width: '50%',  // Limiter la largeur de la ligne
    marginTop: 5,
  },
  componentContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.Gris,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
});
