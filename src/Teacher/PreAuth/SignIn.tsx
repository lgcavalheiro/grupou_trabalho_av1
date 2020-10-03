import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function TeacherSignIn() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>TEACHER SIGN IN</Text>
      <Button
        title="Logar como professor"
        onPress={() => {
          navigate("TeacherDashboard");
        }}
      />
      <Button
        title="Criar conta de professor"
        onPress={() => {
          navigate("CreateTeacherAccount");
        }}
      />
    </View>
  );
}
