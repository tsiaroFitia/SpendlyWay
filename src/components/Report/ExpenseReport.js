import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default class ExpenseReport extends Component {
  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Jully",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <ScrollView style={styles.container}>
        <View style={styles.ContainerPieChart}>
          <Text style={styles.titlePie}>Dépense par catégorie</Text>
          <View style={styles.pie}></View>
        </View>
        <View style={styles.ContainerRp}>
          <Text style={styles.titleRp}>Dépense par mois</Text>
          <View style={styles.Chart}></View>
          <View>
            {months.map((month, index) => (
              <View key={index} style={styles.monthRow}>
                <Text style={styles.monthText}>{month}</Text>
                <Text style={styles.amountText}>0.0 €</Text>
              </View>
            ))}
          </View>
          <Text style={styles.totalText}>Total année: 0,0 €</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  ContainerPieChart: {
    marginBottom: 20,
  },
  titlePie: {
    fontSize: 18,
    marginBottom: 10,
  },
  pie: {
    height: 200,
  },
  ContainerRp: {
    marginBottom: 20,
  },
  titleRp: {
    fontSize: 18,
    marginBottom: 10,
  },
  Chart: {
    height: 200,
    marginBottom: 20,
  },
  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  monthText: {
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
