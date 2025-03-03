import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

import HeaderHomeScreen from "../../components/Home/HeaderHomeScreen";
import TotalBalance from "../../components/Home/TotalBalance";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderHomeScreen title="Your Pocket Account." />
        <TotalBalance />
        <ScrollView style={styles.content}>
          <Text>Home</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 65,
  },
  content: {
    top: "30%",
  },
});
