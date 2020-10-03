import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function TeacherProfile() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>TEACHER PROFILE</Text>
      <Button
        title="Editar Perfil"
        onPress={() => navigate("TeacherProfileEdit")}
      ></Button>
    </View>
  );
}
