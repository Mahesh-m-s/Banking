import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* TOP HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Hello, Mahesh 👋</Text>
          <Text style={styles.sub}>Welcome back to your bank</Text>
        </View>

        {/* local uploaded avatar (file URI) */}
        <Image
          style={styles.avatar}
          source={{ uri: "file:///mnt/data/6ae2e371-90b3-428a-b671-3c444bb5fb60.png" }}
        />
      </View>

      {/* BALANCE CARD */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>₹ 1,45,200.50</Text>

        <View style={styles.balanceActions}>
          <TouchableOpacity style={styles.balanceBtn}>
            <Ionicons name="eye-outline" size={18} color="#fff" />
            <Text style={styles.balanceBtnTxt}>Hide</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.balanceBtn} onPress={() => { /* refresh logic */ }}>
            <Ionicons name="refresh-outline" size={18} color="#fff" />
            <Text style={styles.balanceBtnTxt}>Refresh</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.quickRow}>
        <TouchableOpacity style={styles.quickBox} onPress={() => navigation.navigate("AddMoney")}>
          <Ionicons name="add-circle-outline" size={28} color="#2563EB" />
          <Text style={styles.quickText}>Add Money</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickBox} onPress={() => navigation.navigate("Withdraw")}>
          <Ionicons name="remove-circle-outline" size={28} color="#DC2626" />
          <Text style={styles.quickText}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickBox} onPress={() => navigation.navigate("SendMoney")}>
          <Ionicons name="send-outline" size={28} color="#0EA5E9" />
          <Text style={styles.quickText}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickBox} onPress={() => navigation.navigate("PayBills")}>
          <Ionicons name="receipt-outline" size={28} color="#7C3AED" />
          <Text style={styles.quickText}>Bills</Text>
        </TouchableOpacity>
      </View>

      {/* EXTRA OPTIONS (your choice B) */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Extra Options</Text>

      <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate("Analytics")}>
        <Ionicons name="bar-chart-outline" size={28} color="#1E3A8A" />
        <Text style={styles.optionText}>View Spending Analytics</Text>
        <Ionicons name="chevron-forward" size={22} color="#475569" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate("SendMoney")}>
        <Ionicons name="paper-plane-outline" size={28} color="#0EA5E9" />
        <Text style={styles.optionText}>Send Money (UPI)</Text>
        <Ionicons name="chevron-forward" size={22} color="#475569" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate("PayBills")}>
        <Ionicons name="wallet-outline" size={28} color="#1E40AF" />
        <Text style={styles.optionText}>Pay Bills</Text>
        <Ionicons name="chevron-forward" size={22} color="#475569" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate("Loan")}>
        <Ionicons name="receipt-outline" size={28} color="#0B5FFF" />
        <Text style={styles.optionText}>Loan Management</Text>
        <Ionicons name="chevron-forward" size={22} color="#475569" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionCard} onPress={() => navigation.navigate("EMICalc")}>
        <Ionicons name="calculator-outline" size={28} color="#065F46" />
        <Text style={styles.optionText}>EMI Calculator</Text>
        <Ionicons name="chevron-forward" size={22} color="#475569" />
      </TouchableOpacity>

      {/* RECENT TRANSACTIONS */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      {[
        { name: "Electricity Bill", amount: "- ₹1,450", type: "debit" },
        { name: "Salary Credited", amount: "+ ₹30,000", type: "credit" },
        { name: "Grocery Shopping", amount: "- ₹1,200", type: "debit" },
      ].map((tx, index) => (
        <TouchableOpacity
          key={index}
          style={styles.transaction}
          onPress={() =>
            navigation.navigate("TransactionDetails", {
              name: tx.name,
              amount: tx.amount,
              date: "19 Nov 2025",
              type: tx.type,
            })
          }
        >
          <View>
            <Text style={styles.txName}>{tx.name}</Text>
            <Text style={styles.txDate}>19 Nov 2025</Text>
          </View>

          <Text style={tx.type === "debit" ? styles.txRed : styles.txGreen}>
            {tx.amount}
          </Text>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F1F5F9", padding: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  welcome: { fontSize: 22, fontWeight: "700", color: "#1E3A8A" },
  sub: { color: "#64748B", marginTop: 3 },

  avatar: { width: 45, height: 45, borderRadius: 50 },

  balanceCard: {
    backgroundColor: "#2563EB",
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
  },

  balanceTitle: { color: "#bfdbfe", fontSize: 16 },
  balanceAmount: { fontSize: 32, fontWeight: "bold", color: "white", marginTop: 5 },

  balanceActions: { flexDirection: "row", marginTop: 15 },
  balanceBtn: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  balanceBtnTxt: { color: "#fff", marginLeft: 5 },

  sectionTitle: { fontSize: 19, fontWeight: "700", marginTop: 20, color: "#1E293B" },

  quickRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },

  quickBox: {
    width: "23%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    elevation: 2,
  },

  quickText: { fontSize: 12, marginTop: 5, fontWeight: "600", color: "#334155" },

  optionCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 3,
  },

  optionText: { flex: 1, marginLeft: 10, fontWeight: "600", color: "#1E293B" },

  transaction: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  txName: { fontSize: 16, fontWeight: "600", color: "#334155" },
  txDate: { fontSize: 12, color: "#94A3B8" },

  txRed: { color: "#DC2626", fontWeight: "bold", fontSize: 16 },
  txGreen: { color: "#16A34A", fontWeight: "bold", fontSize: 16 },
});
