import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AnalyticsScreen() {
  // sample numbers
  const monthlyIncome = 80000;
  const monthlyExpense = 25500;
  const savings = monthlyIncome - monthlyExpense;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Analytics</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Monthly Income</Text>
        <Text style={styles.amount}>₹ {monthlyIncome.toLocaleString()}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Monthly Expense</Text>
        <Text style={[styles.amount, { color: "#DC2626" }]}>₹ {monthlyExpense.toLocaleString()}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estimated Savings</Text>
        <Text style={[styles.amount, { color: "#16A34A" }]}>₹ {savings.toLocaleString()}</Text>
      </View>

      <Text style={{ marginTop: 18, color: "#64748B" }}>
        Tip: Install react-native-chart-kit and I can add beautiful graphs (bar/pie/line).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 18 },
  card: { backgroundColor: "#fff", padding: 18, borderRadius: 12, marginBottom: 12, elevation: 2 },
  cardTitle: { color: "#64748B", marginBottom: 6 },
  amount: { fontSize: 20, fontWeight: "700", color: "#0F172A" },
});
