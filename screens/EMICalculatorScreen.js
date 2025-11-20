import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function EMICalculatorScreen() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loan);
    const r = parseFloat(rate) / 1200; // monthly rate
    const n = parseInt(months, 10);

    if (!P || !r || !n) return setEmi(null);

    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(EMI.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EMI Calculator</Text>

      <TextInput style={styles.input} placeholder="Loan Amount" keyboardType="numeric" value={loan} onChangeText={setLoan} />
      <TextInput style={styles.input} placeholder="Annual Interest Rate ( % )" keyboardType="numeric" value={rate} onChangeText={setRate} />
      <TextInput style={styles.input} placeholder="Tenure (months)" keyboardType="numeric" value={months} onChangeText={setMonths} />

      <TouchableOpacity style={styles.button} onPress={calculateEMI}>
        <Text style={styles.buttonText}>Calculate EMI</Text>
      </TouchableOpacity>

      {emi && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Estimated EMI: ₹ {emi}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFC" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 14 },
  input: { backgroundColor: "#fff", padding: 14, borderRadius: 10, borderWidth: 1, borderColor: "#E2E8F0", marginBottom: 12 },
  button: { backgroundColor: "#16A34A", padding: 14, borderRadius: 10, alignItems: "center", marginTop: 6 },
  buttonText: { color: "#fff", fontWeight: "700" },
  result: { marginTop: 16, backgroundColor: "#fff", padding: 14, borderRadius: 10, elevation: 2 },
  resultText: { fontSize: 18, fontWeight: "700" },
});
