import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../outils/Colors';

export default class TotalBalance extends Component {
  state = {
    showBalance: true,
  };

  toggleBalanceVisibility = () => {
    this.setState((prevState) => ({
      showBalance: !prevState.showBalance,
    }));
  };

  handleRevenuePress = () => {
    console.log('Revenu clicked');
  };

  handleExpensePress = () => {
    console.log('Dépense clicked');
  };

  render() {
    const { showBalance } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Solde Section */}
          <View style={styles.solde}>
            <View style={styles.label}>
              <Text style={styles.labelText}>Solde</Text>
              <Text style={styles.balanceText}>
                {showBalance ? '0,00' : '***'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={this.toggleBalanceVisibility}
            >
              <Ionicons
                name={showBalance ? 'eye' : 'eye-off'}
                size={30}
                color={Colors.BleuFoncé}
              />
            </TouchableOpacity>
          </View>

          {/* Section Transactions */}
          <View style={styles.transactionsolde}>
            {/* Revenu */}
            <TouchableOpacity
              style={styles.transactionBox}
              onPress={this.handleRevenuePress}
            >
              <Ionicons
                name="arrow-up-circle-outline"
                size={30}
                color={Colors.Vert}
                style={styles.iconLeft}
              />
              <View style={styles.transactionInfo}>
                <Text style={styles.labelText}>Income</Text>
                <Text style={styles.balanceText}>0,00</Text>
              </View>
            </TouchableOpacity>

            {/* Dépense */}
            <TouchableOpacity
              style={styles.transactionBox}
              onPress={this.handleExpensePress}
            >
              <Ionicons
                name="arrow-down-circle-outline"
                size={30}
                color={Colors.Rouge}
                style={styles.iconLeft}
              />
              <View style={styles.transactionInfo}>
                <Text style={styles.labelText}>Expense</Text>
                <Text style={styles.balanceText}>0,00</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '35%',
    backgroundColor: Colors.BleuFoncé,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    backgroundColor: Colors.BlancFond,
    width: '90%',
    height: 225,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    position: 'absolute',
    bottom: -100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  solde: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    flexDirection: 'column',
  },
  labelText: {
    fontSize: 16,
    color: Colors.BleuFoncé,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.BleuFoncé,
  },
  iconWrapper: {
    backgroundColor: Colors.JauneFoncé,
    borderRadius: 25,
    padding: 8,
  },
  transactionsolde: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  transactionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BlancFond,
    padding: 10,
    borderRadius: 10,
    width: '48%',
    elevation: 3,
  },
  iconLeft: {
    marginRight: 10,
  },
  transactionInfo: {
    alignItems: 'flex-start',
  },
});
