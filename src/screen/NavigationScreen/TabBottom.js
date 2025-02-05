import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../outils/Colors';
import AddTransactionScreen from '../ScreenBottomNavigation/AddTransactionScreen';
import CardScreen from '../ScreenBottomNavigation/CardScreen';
import CategoryScreen from '../ScreenBottomNavigation/CategoryScreen';
import HomeScreen from '../ScreenBottomNavigation/HomeScreen';
import RepportScreen from '../ScreenBottomNavigation/RepportScreen';

const Tab = createBottomTabNavigator();

const CustomAddButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.addButton}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Card':
              iconName = focused ? 'card' : 'card-outline';
              break;
            case 'Repport':
              iconName = focused ? 'stats-chart-sharp' : 'stats-chart-sharp';
              break;
            case 'Category':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            default:
              iconName = 'home-outline';
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: Colors.JauneFoncé, // Couleur active des icônes
        tabBarInactiveTintColor: 'gray', // Couleur inactive des icônes
        tabBarLabelStyle: { display: 'none' }, // Cacher les labels sous les icônes
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Card" component={CardScreen} options={{ headerShown: false }} />
      <Tab.Screen
        name="Plus" // Pas de texte, juste un bouton pour ajouter
        component={AddTransactionScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="add" size={30} color="white" />
          ),
          tabBarButton: (props) => <CustomAddButton {...props} />,
          headerShown: false,
        }}
      />
      <Tab.Screen name="Repport" component={RepportScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabBottom;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    paddingTop: 7,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFF',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.JauneFoncé,
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
