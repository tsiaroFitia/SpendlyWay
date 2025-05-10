import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../outils/Colors";
import Icone from "./ImportIcone/Icone";
import { supabase } from "../../services/supabase";

export default class ModalAddCategory extends Component {
  state = {
    iconModalVisible: false,
    name: "",
    selectedIcon: "pricetag-outline", // Icône par défaut
    isLoading: false,
  };

  openIconModal = () => this.setState({ iconModalVisible: true });
  closeIconModal = () => this.setState({ iconModalVisible: false });

  handleIconSelect = (iconName) => {
    this.setState({ selectedIcon: iconName });
    this.closeIconModal();
  };

  handleAddCategory = async () => {
    const { name, selectedIcon } = this.state;

    if (!name.trim()) {
      Alert.alert("Erreur", "Veuillez entrer un nom pour la catégorie");
      return;
    }

    this.setState({ isLoading: true });

    try {
      const { data, error } = await supabase
        .from("categories")
        .insert([
          {
            name: name.trim(),
            icon: selectedIcon,
          },
        ])
        .select();

      if (error) throw error;

      this.props.onAddCategory(data[0]);
      this.props.onCloseModal();
    } catch (error) {
      console.error("Error adding category:", error);
      Alert.alert("Erreur", error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { modalVisible, onCloseModal } = this.props;
    const { iconModalVisible, name, selectedIcon, isLoading } = this.state;

    return (
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Ajouter une catégorie</Text>

            {/* Nom de la catégorie */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="pricetag-outline"
                size={25}
                color={Colors.BleuFoncé}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Nom de la catégorie"
                value={name}
                onChangeText={(text) => this.setState({ name: text })}
                maxLength={30}
              />
            </View>

            {/* Sélection d'icône */}
            <TouchableOpacity
              style={styles.iconSelectButton}
              onPress={this.openIconModal}
            >
              <Ionicons
                name={selectedIcon}
                size={25}
                color={Colors.BleuFoncé}
                style={styles.icon}
              />
              <Text style={styles.iconSelectText}>Choisir une icône</Text>
            </TouchableOpacity>

            {/* Boutons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onCloseModal}
                disabled={isLoading}
              >
                <Text style={styles.buttonText1}>Annuler</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, isLoading && styles.disabledButton]}
                onPress={this.handleAddCategory}
                disabled={isLoading}
              >
                <Text style={styles.buttonText}>
                  {isLoading ? "Ajout..." : "Ajouter"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Modal de sélection d'icône */}
          <Modal
            transparent
            visible={iconModalVisible}
            animationType="slide"
            onRequestClose={this.closeIconModal}
          >
            <Icone
              closeIconeModal={this.closeIconModal}
              handleIconSelect={this.handleIconSelect}
              currentIcon={selectedIcon}
            />
          </Modal>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "85%",
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: Colors.BleuFoncé,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BleuClair,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  icon: {
    marginLeft: 5,
    marginRight: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconSelectButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.BleuClair,
    borderRadius: 8,
    padding: 12,
    width: "100%",
    marginBottom: 20,
  },
  iconSelectText: {
    color: Colors.BleuFoncé,
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: Colors.JauneFoncé,
    padding: 12,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: Colors.JauneFoncé,
    padding: 12,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  buttonText1: {
    color: Colors.JauneFoncé,
    fontSize: 16,
    fontWeight: "500",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  disabledButton: {
    opacity: 0.6,
  },
});
