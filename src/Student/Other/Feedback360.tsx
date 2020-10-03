import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function Feedback360() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>FEEDBACK 360</Text>
    </View>
  );
}