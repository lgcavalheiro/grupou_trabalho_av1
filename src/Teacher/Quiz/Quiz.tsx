import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function () {
  const [selectedValue, setSelectedValue] = useState("001");

  return (
    <View>
      <Text>LISTA DE QUIZZES CRIADOS E VALIDADOS</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Introdução à programação" value="001" />
        <Picker.Item label="Raciocínio Lógico" value="002" />
      </Picker>
      <TextInput placeholder="Questão"></TextInput>
      <TextInput placeholder="Resposta"></TextInput>
      <Button
        title="Criar novo quiz"
        onPress={() => alert("Quiz criado com sucesso!")}
      ></Button>
    </View>
  );
}
