import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import AddCategory from "./AddCategory";
import Colors from "../../outils/Colors";

export default class ExpenseCategory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddCategory />
        {/*liste des category */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.list}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.containIcon}>
                <Icon name="trash-outline" size={25} color={Colors.white} />
              </View>
              <Text style={{ paddingLeft: 10 }}>Name</Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity>
                <MaterialIcons name="edit" size={25} color={Colors.BleuFoncé} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="trash" size={25} color={Colors.Rouge} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1, // Assure que la ScrollView occupe tout l'espace nécessaire
    alignItems: "center", // Centrer horizontalement
  },
  list: {
    width: "90%",
    backgroundColor: Colors.white,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 7,
    marginBottom: 15,
  },
  containIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.BleuClair,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    gap: 25,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});
