import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/DashboardScreen";
import AccountsScreen from "../screens/AccountsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import AddMoneyScreen from "../screens/AddMoneyScreen";
import WithdrawScreen from "../screens/WithdrawScreen";
import TransactionDetailsScreen from "../screens/TransactionDetailsScreen";

import SendMoneyScreen from "../screens/SendMoneyScreen";
import PayBillsScreen from "../screens/PayBillsScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import LoanScreen from "../screens/LoanScreen";
import EMICalculatorScreen from "../screens/EMICalculatorScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1E3A8A",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let icon;
          if (route.name === "Dashboard") icon = "speedometer-outline";
          else if (route.name === "Accounts") icon = "wallet-outline";
          else if (route.name === "Profile") icon = "person-circle-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Tabs (no header) */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      {/* Existing inner screens (show header/back) */}
      <Stack.Screen name="AddMoney" component={AddMoneyScreen} options={{ title: "Add Money" }} />
      <Stack.Screen name="Withdraw" component={WithdrawScreen} options={{ title: "Withdraw" }} />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailsScreen}
        options={{ title: "Transaction Details" }}
      />

      {/* NEW advanced screens (show header/back) */}
      <Stack.Screen name="SendMoney" component={SendMoneyScreen} options={{ title: "Send Money" }} />
      <Stack.Screen name="PayBills" component={PayBillsScreen} options={{ title: "Pay Bills" }} />
      <Stack.Screen name="Analytics" component={AnalyticsScreen} options={{ title: "Spending Analytics" }} />
      <Stack.Screen name="Loan" component={LoanScreen} options={{ title: "Loan Management" }} />
      <Stack.Screen name="EMICalc" component={EMICalculatorScreen} options={{ title: "EMI Calculator" }} />
    </Stack.Navigator>
  );
}
