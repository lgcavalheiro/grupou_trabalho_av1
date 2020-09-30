import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function StudentGroups() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>STUDENT GROUPS</Text>
    </View>
  );
}