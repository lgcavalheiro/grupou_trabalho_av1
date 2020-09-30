import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function Classes() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>CLASSES</Text>
    </View>
  );
}