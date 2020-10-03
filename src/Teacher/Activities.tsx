import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function Activities() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>ACTIVITIES</Text>
    </View>
  );
}