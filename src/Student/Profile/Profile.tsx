import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>STUDENT PROFILE</Text>
      <Button
        title="Editar Perfil"
        onPress={() => navigate("StudentProfileEdit")}
      ></Button>
    </View>
  );
}
