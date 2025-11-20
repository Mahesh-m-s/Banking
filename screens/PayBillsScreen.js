import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const billTypes = ["Electricity", "Mobile", "DTH", "Water", "Broadband"];

export default function PayBillsScreen() {
  const [selected, setSelected] = useState(null);
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pay Bills</Text>

      <View style={{ marginBottom: 12 }}>
        {billTypes.map((b) => (
          <TouchableOpacity
            key={b}
            style={[styles.billRow, selected === b && styles.billRowSelected]}
            onPress={() => setSelected(b)}
          >
            <Text style={styles.billText}>{b}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.button} onPress={() => { /* pay bill */ }}>
        <Text style={styles.buttonText}>Pay {selected || "Bill"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  billRow: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E6EEF8",
  },
  billRowSelected: { borderColor: "#2563EB", backgroundColor: "#EAF2FF" },
  billText: { fontSize: 16 },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 15,
  },
  button: { backgroundColor: "#1E3A8A", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
