import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>FORMULÁRIO DE EDIÇÃO DAS DISCIPLINAS</Text>
      <Button
        title="Pronto"
        onPress={() => {
          alert("Disciplinas atualizadas com sucesso!");
          goBack();
        }}
      ></Button>
    </View>
  );
}
