import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function QuizValidate() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>QUIZ VALIDATE</Text>
    </View>
  );
}