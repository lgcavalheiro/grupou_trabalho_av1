import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function Quiz() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>QUIZ</Text>
    </View>
  );
}