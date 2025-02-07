import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import Colors from '../../outils/Colors';
import ModalAddTransaction from '../../components/Add/ModalAddTransaction';

const AddTransactionScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Ouvrir le modal à l'entrée de l'écran
  useFocusEffect(
    React.useCallback(() => {
      setModalVisible(true);
      return () => setModalVisible(false); // Réinitialiser lors de la sortie
    }, [])
  );

  const closeAddModal = () => {
    setModalVisible(false);
    navigation.goBack(); // Revenir automatiquement à l'onglet précédent
  };

  return (
    <View style={styles.container}>
      {/* Modal pour Ajouter une transaction */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeAddModal}
      >
        <View style={styles.modalBackground}>
          <ModalAddTransaction onClose={closeAddModal} />
        </View>
      </Modal>
    </View>
  );
};

export default AddTransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: Colors.BackGroundModal,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
