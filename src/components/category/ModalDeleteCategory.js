import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Colors from "../../outils/Colors";

function ModalDeleteCategory({ modalVisible, onCloseModal, handleDelete }) {
  return (
    <Modal transparent={true} visible={modalVisible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete Category</Text>
          <View style={styles.tsipika}>
            <Text>ttttt</Text>
          </View>
          <Text style={styles.ask}>
            Do you really want to delete this item ?
          </Text>
          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onCloseModal}
            >
              <Text style={styles.buttonText1}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalDeleteCategory;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BackGroundModal,
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    color: Colors.BleuFoncé,
  },
  tsipika: {
    height: 0.5,
    width: "90%",
    backgroundColor: Colors.BleuFoncé,
    marginBottom: 20,
  },
  ask: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: Colors.BleuFoncé,
    paddingBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: Colors.JauneFoncé,
    padding: 10,
    borderRadius: 5,
    width: "45%",
  },
  cancelButton: {
    borderColor: Colors.JauneFoncé,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "45%",
  },
  buttonText1: {
    color: Colors.JauneFoncé,
    textAlign: "center",
    fontSize: 16,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
  },
});
