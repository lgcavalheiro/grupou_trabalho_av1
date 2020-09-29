import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function TeacherDashboard() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>TEACHER DASHBOARD</Text>
    </View>
  );
}