import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function ActivitiesEdit() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>ACTIVITIES EDIT</Text>
    </View>
  );
}