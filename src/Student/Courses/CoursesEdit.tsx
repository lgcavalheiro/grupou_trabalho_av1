import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>STUDENT COURSES EDIT</Text>
      <Button title="Pronto" onPress={() => goBack()}></Button>
    </View>
  );
}
