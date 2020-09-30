import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function StudentProfile() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>STUDENT PROFILE</Text>
    </View>
  );
}