import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function AddMoneyScreen() {
  const [amount, setAmount] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Add Money</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Account</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E3A8A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
