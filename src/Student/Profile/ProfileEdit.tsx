import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>FORMULÁRIO DE EDIÇÃO DE PERFIL DE ALUNO</Text>
      <Button
        title="Pronto"
        onPress={() => {
          alert("Perfil atualizado com sucesso!");
          goBack();
        }}
      ></Button>
    </View>
  );
}
