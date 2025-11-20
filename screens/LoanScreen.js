// screens/LoanScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LoanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Management</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Home Loan</Text>
        <Text style={styles.value}>Outstanding: ₹ 8,50,000</Text>
        <Text style={styles.small}>EMI: ₹ 12,500 | Tenure left: 84 months</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Personal Loan</Text>
        <Text style={styles.value}>Outstanding: ₹ 1,20,000</Text>
        <Text style={styles.small}>EMI: ₹ 3,200 | Tenure left: 24 months</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply for New Loan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 18 },
  card: { backgroundColor: "#fff", padding: 18, borderRadius: 12, marginBottom: 12, elevation: 2 },
  label: { fontSize: 16, fontWeight: "700" },
  value: { fontSize: 18, marginTop: 6, fontWeight: "700" },
  small: { color: "#64748B", marginTop: 6 },
  button: {
    backgroundColor: "#0B5FFF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: { color: "#fff", fontWeight: "700" },
});
