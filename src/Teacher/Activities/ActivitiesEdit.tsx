import React from "react";
import { View, Text, Button } from "react-native";

export default function () {
  return (
    <View>
      <Text>FORMULÁRIO PARA EDIÇÃO DE ATIVIDADES</Text>
      <Button
        title="Pronto"
        onPress={() => {
          alert("Atividades atualizadas com sucesso!");
        }}
      ></Button>
    </View>
  );
}
