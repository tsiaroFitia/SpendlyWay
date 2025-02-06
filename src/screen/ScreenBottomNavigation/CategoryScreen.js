import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';  
import Ionicons from 'react-native-vector-icons/Ionicons';

import IncomeCategory from '../../components/Category/IncomeCategory';
import ExpenseCategory from '../../components/Category/ExpenseCategory';
import Colors from '../../outils/Colors';
import HeaderHomeScreen from '../../components/Home/HeaderHomeScreen';

const Tab = createMaterialTopTabNavigator();

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Le Header */}
      <View style={styles.headerContainer}>
        <HeaderHomeScreen title="Category" />
      </View>

      {/* La barre de navigation des onglets en haut */}
      <View style={styles.tabBarContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // Suppression de tabBarIcon ici pour personnaliser uniquement le texte et l'icône
            tabBarLabel: ({ focused }) => {
              const label = route.name === 'IncomeCategory' ? 'Income' : 'Expense';
              const textColor = focused
                ? route.name === 'IncomeCategory'
                  ? Colors.Vert
                  : Colors.Rouge
                : 'gray';

              return (
                <View style={styles.tabLabelContainer}>
                  <Ionicons
                    name={route.name === 'IncomeCategory' ? 'arrow-up-circle-outline' : 'arrow-down-circle-outline'}
                    size={24}
                    color={textColor}
                  />
                  <Text style={[styles.tabLabel, { color: textColor }]}>{label}</Text>
                </View>
              );
            },
            tabBarActiveTintColor: Colors.Vert, // Par défaut pour Income
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: styles.tabBarStyle,
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIndicatorStyle: ({ route, focused }) => ({
              backgroundColor: focused
                ? route.name === 'IncomeCategory'
                  ? Colors.Vert
                  : Colors.Rouge
                : 'transparent',  // Transparente lorsque l'onglet n'est pas actif
            }),
          })}
        >
          <Tab.Screen name="IncomeCategory" component={IncomeCategory} options={{ headerShown: false }} />
          <Tab.Screen name="ExpenseCategory" component={ExpenseCategory} options={{ headerShown: false }} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BlancFond,
  },
  headerContainer: {
    // Personnalise la zone du header si nécessaire
  },
  tabBarContainer: {
    flex: 1,  // Pour occuper l'espace restant sous le header
  },
  tabBarStyle: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarLabelStyle: {
    fontSize: 14, 
  },
  tabLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabLabel: {
    marginLeft: 5,
    fontSize: 16,  
  },
});
