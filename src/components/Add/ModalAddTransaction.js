import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";
import Colors from "../../outils/Colors";

export default class ModalAddTransaction extends Component {
  state = {
    amount: "",
    category: "",
    date: "",
    description: "",
    transactionType: "revenue",
    showCalendar: false,
  };

  handleAddTransaction = async () => {
    const {
      description,
      amount,
      transactionType,
      selectedCategory,
      selectedSource,
      date,
    } = this.state;

    if (!description || !amount || !selectedCategory || !date) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("transactions")
        .insert([
          {
            amount: parseFloat(amount),
            description,
            date,
            type: transactionType,
            category_id: selectedCategory.id,
            source_id: selectedSource?.id || null,
          },
        ])
        .select();

      if (error) throw error;

      this.props.onAddTransaction(data[0]);
      this.props.onClose();
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Error: " + error.message);
    }
  };

  handleTransactionTypeChange = (type) => {
    this.setState({ transactionType: type });
  };

  handleDateSelect = (day) => {
    const selectedDate = `${day.year}-${day.month}-${day.day}`;
    this.setState({ date: selectedDate, showCalendar: false });
  };

  render() {
    const { transactionType, date, showCalendar } = this.state;
    const iconColor = transactionType === "Income" ? Colors.Vert : Colors.Rouge;
    const buttonStyle =
      transactionType === "Income"
        ? styles.selectedButtonGreen
        : styles.selectedButtonRed;

    return (
      <View style={styles.modalContainer}>
        <View style={styles.headertitle}>
          <Text style={styles.title}>Add a new Transaction</Text>
        </View>
        <View style={styles.tsipika}></View>

        {/* Sélectionner le type de transaction (Revenu ou Dépense) */}
        <View style={styles.transactionTypeContainer}>
          <TouchableOpacity
            style={[
              styles.transactionButton,
              transactionType === "Income" && buttonStyle,
            ]}
            onPress={() => this.handleTransactionTypeChange("Income")}
          >
            <Ionicons
              name="arrow-up-circle-outline"
              size={24}
              color={
                transactionType === "Income" ? Colors.Vert : Colors.GrisNeutre
              }
              style={{ paddingLeft: 10 }}
            />
            <Text
              style={[styles.transactionButtonText, { color: Colors.Vert }]}
            >
              Income
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.transactionButton,
              transactionType === "expense" && buttonStyle,
            ]}
            onPress={() => this.handleTransactionTypeChange("expense")}
          >
            <Ionicons
              name="arrow-down-circle-outline"
              size={24}
              color={
                transactionType === "expense" ? Colors.Rouge : Colors.GrisNeutre
              }
              style={{ paddingLeft: 10 }}
            />
            <Text
              style={[styles.transactionButtonText, { color: Colors.Rouge }]}
            >
              Expense
            </Text>
          </TouchableOpacity>
        </View>

        {/* Champs (Montant, Catégorie, Date, Description) avec icône en couleur */}
        {["Amount", "Category", "Description"].map((field, index) => (
          <TouchableOpacity
            key={index}
            style={styles.inputContainer}
            onPress={() => this[`inputRef${field}`]?.focus()}
          >
            <Ionicons
              name={
                field === "Amount"
                  ? "cash-outline"
                  : field === "Category"
                  ? "folder-outline"
                  : "pencil-outline"
              }
              size={24}
              color={iconColor}
              style={{ marginLeft: 10 }}
            />
            <TextInput
              ref={(input) => (this[`inputRef${field}`] = input)}
              style={styles.input}
              placeholder={field}
              value={this.state[field.toLowerCase()]}
              onChangeText={(text) =>
                this.setState({ [field.toLowerCase()]: text })
              }
            />
          </TouchableOpacity>
        ))}

        {/* Sélecteur de date */}
        <TouchableOpacity
          style={styles.inputContainerDate}
          onPress={() => this.setState({ showCalendar: true })}
        >
          <Ionicons
            name="calendar-outline"
            size={24}
            color={iconColor}
            style={{ marginLeft: 10 }}
          />
          <Text style={styles.input}>
            {date
              ? new Date(date).toLocaleDateString("fr-FR", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })
              : "Date"}
          </Text>
        </TouchableOpacity>

        {/* Calendrier */}
        <Modal
          transparent={true}
          visible={showCalendar}
          onRequestClose={() => this.setState({ showCalendar: false })}
        >
          <View style={styles.calendarModal}>
            <View style={styles.calendarContainer}>
              <Calendar
                onDayPress={(day) => this.handleDateSelect(day)}
                markedDates={{
                  [date]: { selected: true, selectedColor: Colors.BleuFoncé },
                }}
                theme={{
                  backgroundColor: Colors.white,
                  calendarBackground: Colors.white,
                  textSectionTitleColor: Colors.BleuFoncé,
                  selectedDayBackgroundColor: Colors.BleuClair,
                  selectedDayTextColor: Colors.white,
                  todayTextColor: Colors.BleuFoncé,
                  dayTextColor: Colors.BleuFoncé,
                  textDisabledColor: Colors.BleuClair,
                  arrowColor: Colors.BleuClair,
                  monthTextColor: Colors.BleuFoncé,
                  textDayFontWeight: "medium",
                  textMonthFontWeight: "bold",
                  textDayHeaderFontWeight: "bold",
                  textDayFontSize: 14,
                  textMonthFontSize: 20,
                  textDayHeaderFontSize: 16,
                }}
              />
            </View>
          </View>
        </Modal>

        {/* Boutons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={this.props.onClose}
          >
            <Text
              style={[styles.buttonTextCancel, { color: Colors.JauneFoncé }]}
            >
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              transactionType === "Income"
                ? styles.buttonGreen
                : styles.buttonRed,
            ]}
            onPress={this.handleAddTransaction}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    transactionType === "Income" ? Colors.Vert : Colors.Rouge,
                },
              ]}
            >
              Valid
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    width: "90%",
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: Colors.BleuFoncé,
  },
  tsipika: {
    height: 1,
    backgroundColor: Colors.Gris,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Gris,
    padding: 7,
    borderRadius: 8,
    marginBottom: 20,
  },
  inputContainerDate: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Gris,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    marginLeft: 20,
    fontSize: 16,
    flex: 1,
  },
  transactionTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  transactionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.BlancFond,
    padding: 10,
    borderRadius: 10,
    width: "48%",
    height: 50,
    elevation: 3,
    marginBottom: 10,
    marginTop: 20,
  },
  selectedButtonGreen: {
    borderWidth: 1,
    borderColor: Colors.Vert,
  },
  selectedButtonRed: {
    borderWidth: 1,
    borderColor: Colors.Rouge,
  },
  transactionButtonText: {
    fontSize: 16,
    color: "#000",
    paddingLeft: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.BleuFoncé,
    padding: 10,
    borderRadius: 8,
    width: "45%",
    justifyContent: "center",
  },
  buttonGreen: {
    backgroundColor: Colors.BlancFond,
    borderWidth: 1,
    borderColor: Colors.Vert,
  },
  buttonRed: {
    backgroundColor: Colors.BlancFond,
    borderWidth: 1,
    borderColor: Colors.Rouge,
  },
  cancelButton: {
    backgroundColor: Colors.BlancFond,
    borderWidth: 1,
    borderColor: Colors.JauneFoncé,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  buttonTextCancel: {
    fontSize: 16,
    marginLeft: 5,
  },
  calendarModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: "90%",
  },
});
