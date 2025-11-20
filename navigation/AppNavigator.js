import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardScreen from "../screens/DashboardScreen";
import AccountsScreen from "../screens/AccountsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import AddMoneyScreen from "../screens/AddMoneyScreen";
import WithdrawScreen from "../screens/WithdrawScreen";
import TransactionDetailsScreen from "../screens/TransactionDetailsScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ---------- Bottom Tabs ----------
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

// ---------- Stack Navigator ----------
export default function AppNavigator() {
  return (
    <Stack.Navigator>

      {/* Tabs should not show header */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      {/* Inner pages WITH back button */}
      <Stack.Screen
        name="AddMoney"
        component={AddMoneyScreen}
        options={{
          title: "Add Money",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="Withdraw"
        component={WithdrawScreen}
        options={{
          title: "Withdraw Money",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailsScreen}
        options={{
          title: "Transaction Details",
          headerShown: true,
          headerBackTitleVisible: false,
        }}
      />

    </Stack.Navigator>
  );
}
