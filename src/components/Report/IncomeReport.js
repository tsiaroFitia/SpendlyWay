import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import Colors from "../../outils/Colors";

export default class IncomeReport extends Component {
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
          <Text style={styles.titlePie}>Income per category</Text>
          <View style={styles.pie}></View>
        </View>
        <View style={styles.ContainerRp}>
          <Text style={styles.titleRp}>Income per month</Text>
          <View style={styles.Chart}></View>
          <View>
            {months.map((month, index) => (
              <View key={index} style={styles.monthRow}>
                <Text style={styles.monthText}>{month}</Text>
                <Text style={styles.amountText}>0.0 €</Text>
              </View>
            ))}
          </View>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total year: </Text>
            <Text style={styles.totalAmount}>0,0 €</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  ContainerPieChart: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 20,
  },
  titlePie: {
    color: Colors.BleuFoncé,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pie: {
    height: 200,
  },
  ContainerRp: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginBottom: 40,
  },
  titleRp: {
    color: Colors.BleuFoncé,
    fontSize: 18,
    fontWeight: "bold",
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
    paddingHorizontal: 10,
  },
  monthText: {
    color: "gray",
    fontSize: 16,
  },
  amountText: {
    color: Colors.Vert,
    fontSize: 16,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  totalText: {
    color: Colors.BleuFoncé,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  totalAmount: {
    color: Colors.BleuFoncé,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
