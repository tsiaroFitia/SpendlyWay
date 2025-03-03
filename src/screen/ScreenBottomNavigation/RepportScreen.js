import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import IncomeReport from "../../components/Report/IncomeReport";
import ExpenseReport from "../../components/Report/ExpenseReport";
import Colors from "../../outils/Colors";
import HeaderHomeScreen from "../../components/Home/HeaderHomeScreen";

const Tab = createMaterialTopTabNavigator();

const RepportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Le Header */}
      <View style={styles.headerContainer}>
        <HeaderHomeScreen title="Report" />
      </View>

      {/* La barre de navigation des onglets en haut */}
      <View style={styles.tabBarContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // On supprime tabBarIcon ici
            tabBarLabel: ({ focused }) => {
              const label =
                route.name === "IncomeReport" ? "Income" : "Expense";
              const textColor = focused
                ? route.name === "IncomeReport"
                  ? Colors.Vert
                  : Colors.Rouge
                : "gray";

              return (
                <View style={styles.tabLabelContainer}>
                  <Ionicons
                    name={
                      route.name === "IncomeReport"
                        ? "arrow-up-circle-outline"
                        : "arrow-down-circle-outline"
                    }
                    size={24}
                    color={textColor}
                  />
                  <Text style={[styles.tabLabel, { color: textColor }]}>
                    {label}
                  </Text>
                </View>
              );
            },
            tabBarActiveTintColor: Colors.Vert, // Par défaut pour Income
            tabBarInactiveTintColor: "gray",
            tabBarStyle: styles.tabBarStyle,
            tabBarLabelStyle: styles.tabBarLabelStyle,
          })}
        >
          <Tab.Screen
            name="IncomeReport"
            component={IncomeReport}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="ExpenseReport"
            component={ExpenseReport}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default RepportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 65,
    backgroundColor: Colors.BlancFond,
  },
  headerContainer: {},
  tabBarContainer: {
    flex: 1, // Pour occuper l'espace restant sous le header
  },
  tabBarStyle: {
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarLabelStyle: {
    fontSize: 14,
  },
  tabLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabLabel: {
    marginLeft: 5,
    fontSize: 16,
  },
});
