import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../outils/Colors';
import FontText from '../../outils/FontText';
import AddTransactionScreen from '../ScreenBottomNavigation/AddTransactionScreen';
import CardScreen from '../ScreenBottomNavigation/CardScreen';
import CategoryScreen from '../ScreenBottomNavigation/CategoryScreen';
import HomeScreen from '../ScreenBottomNavigation/HomeScreen';
import RepportScreen from '../ScreenBottomNavigation/RepportScreen';



const Tab = createBottomTabNavigator();

const CustomAddButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.vert1,
      width: 60,
      height: 60,
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }}
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
            case 'HomeScreen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'CardScreen':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'CategoryScreen':
              iconName = 'camera';
              break;
            case 'RepportScreen':
              iconName = focused ? 'chatbox' : 'chatbox-outline';
              break;
            case 'AddTransactionScreen':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          backgroundColor: '#FFFF',
          borderRadius: 10,
          height: 50,
          alignItems: 'center',
        },
        tabBarActiveTintColor: Colors.vert1,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} style={styles.container}/>
      <Tab.Screen name="CardScreen" component={CardScreen} style={styles.container}/>
      <Tab.Screen
        name="AddTransactionScreen"
        component={AddTransactionScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera" size={30} color="white" />
          ),
          tabBarButton: (props) => <CustomAddButton {...props} />,
          headerShown: false,
        }}
      />
      <Tab.Screen name="RepportScreen" component={RepportScreen} options={{ headerShown: false }}  style={styles.container}/>
      <Tab.Screen name="CategoryScreen" component={CategoryScreen} options={{ headerShown: false }} style={styles.container} />
    </Tab.Navigator>
  );
};

export default TabBottom;


const styles = StyleSheet.create({
  container:{
    textAlign:'center',
    justifyContent:'center',
    paddingBottom:10,
  },
})
