import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function ManageQuizzes() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>MANAGE QUIZZES</Text>
    </View>
  );
}