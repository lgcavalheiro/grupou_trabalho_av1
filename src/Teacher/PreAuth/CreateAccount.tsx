import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>FORMULARIO DE CRIAÇÃO DE CONTA DE PROFESSOR</Text>
      <Button
        title="Criar minha conta de professor"
        onPress={() => {
          alert("Conta criada com sucesso!");
          goBack();
        }}
      ></Button>
    </View>
  );
}
