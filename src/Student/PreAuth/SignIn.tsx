import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>STUDENT SIGN IN</Text>
      <Button
        title="Logar como aluno"
        onPress={() => {
          navigate("StudentDashboard");
        }}
      />
      <Button
        title="Criar conta de aluno"
        onPress={() => {
          navigate("CreateStudentAccount");
        }}
      />
    </View>
  );
}
