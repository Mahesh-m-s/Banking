import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mahesh M S</Text>
      <Text style={styles.email}>mahesh@email.com</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Banking Member Since</Text>
        <Text style={styles.value}>2020</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Total Accounts</Text>
        <Text style={styles.value}>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#F1F5F9' },

  name: { fontSize: 26, fontWeight: 'bold', marginTop: 30, color: '#1E293B' },
  email: { fontSize: 16, color: '#64748B', marginBottom: 30 },

  box: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
    elevation: 3,
  },

  label: { fontSize: 14, color: '#64748B' },
  value: { fontSize: 20, fontWeight: 'bold', color: '#1E293B', marginTop: 5 },
});
