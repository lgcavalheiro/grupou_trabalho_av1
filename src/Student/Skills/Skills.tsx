import React from "react";
import { View, Text, Button } from "react-native";

export default function () {
  return (
    <View>
      <Text>STUDENT SKILLS</Text>
      <Button
        title="Adicionar Skill"
        onPress={() => alert("Skill adicionada")}
      ></Button>
    </View>
  );
}
