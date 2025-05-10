import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import Colors from "../../outils/Colors";
import { supabase } from "../../services/supabase";

const ModalDeleteCategory = ({
  modalVisible,
  onCloseModal,
  categoryId,
  onDeleteSuccess,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!categoryId) return;

    setIsDeleting(true);

    try {
      // 1. D'abord vérifier si la catégorie est utilisée dans des transactions
      const { count } = await supabase
        .from("transactions")
        .select("*", { count: "exact" })
        .eq("category_id", categoryId);

      if (count > 0) {
        Alert.alert(
          "Impossible de supprimer",
          "Cette catégorie est utilisée dans des transactions. Modifiez ou supprimez d'abord les transactions associées."
        );
        return;
      }

      // 2. Supprimer la catégorie
      const { error } = await supabase
        .from("categories")
        .delete()
        .eq("id", categoryId);

      if (error) throw error;

      onDeleteSuccess();
      onCloseModal();
    } catch (error) {
      console.error("Delete error:", error);
      Alert.alert("Erreur", "La suppression a échoué");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Supprimer la catégorie</Text>

          <View style={styles.separator} />

          <Text style={styles.confirmationText}>
            Êtes-vous sûr de vouloir supprimer cette catégorie ?
          </Text>
          <Text style={styles.warningText}>Cette action est irréversible.</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCloseModal}
              disabled={isDeleting}
            >
              <Text style={styles.cancelButtonText}>Annuler</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <ActivityIndicator color={Colors.white} />
              ) : (
                <Text style={styles.deleteButtonText}>Supprimer</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.BleuFoncé,
    marginBottom: 15,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.GrisClair,
    marginVertical: 10,
  },
  confirmationText: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.BleuFoncé,
    marginBottom: 5,
  },
  warningText: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.Rouge,
    marginBottom: 20,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: "45%",
  },
  cancelButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.JauneFoncé,
  },
  deleteButton: {
    backgroundColor: Colors.Rouge,
  },
  cancelButtonText: {
    color: Colors.JauneFoncé,
    fontSize: 16,
    fontWeight: "500",
  },
  deleteButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ModalDeleteCategory;
