import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TransactionDetailsScreen({ route }) {
  const { name, amount, date, type } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>

        <Text style={styles.label}>Amount</Text>
        <Text style={[styles.value, type === "credit" ? styles.green : styles.red]}>
          {amount}
        </Text>

        <Text style={styles.label}>Date</Text>
        <Text style={styles.value}>{date}</Text>

        <Text style={styles.label}>Type</Text>
        <Text style={styles.value}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F1F5F9" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    elevation: 3,
  },
  label: { fontSize: 14, color: "#64748B", marginTop: 10 },
  value: { fontSize: 20, fontWeight: "bold", color: "#1E293B" },
  red: { color: "#DC2626" },
  green: { color: "#16A34A" },
});
