import React from "react";
import { View, Text, Button } from "react-native";

export default function () {
  return (
    <View>
      <Text>STUDENT SKILLS Quiz</Text>
      <Button
        title="Criar novo quiz"
        onPress={() => alert("Quiz criado")}
      ></Button>
    </View>
  );
}
