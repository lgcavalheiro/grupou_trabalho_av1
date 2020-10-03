import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function StudentSkillsQuiz() {
  const { navigate } = useNavigation();

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
