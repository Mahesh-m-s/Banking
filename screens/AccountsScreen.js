import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AccountsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Accounts</Text>

      <View style={styles.card}>
        <Text style={styles.bankName}>Savings Account</Text>
        <Text style={styles.balance}>₹ 85,000</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.bankName}>Current Account</Text>
        <Text style={styles.balance}>₹ 60,200</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.bankName}>Fixed Deposit</Text>
        <Text style={styles.balance}>₹ 1,20,000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8FAFC' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#1E293B' },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    marginBottom: 15,
  },

  bankName: { fontSize: 16, color: '#475569' },
  balance: { fontSize: 22, fontWeight: 'bold', marginTop: 5, color: '#0F172A' },
});
