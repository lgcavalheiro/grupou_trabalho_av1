import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>FORMULARIO DE CRIAÇÃO DE CONTA DE ALUNO</Text>
      <Button
        title="Criar minha conta de aluno"
        onPress={() => {
          alert("Conta criada com sucesso!");
          goBack();
        }}
      ></Button>
    </View>
  );
}
