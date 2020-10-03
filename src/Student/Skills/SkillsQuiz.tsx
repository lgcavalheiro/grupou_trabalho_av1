import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function () {
  const [selectedValue, setSelectedValue] = useState("python");

  return (
    <View>
      <Text>FORMULÁRIO PARA CRIAÇÂO DE NOVO QUIZ</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="Javascript" value="javascript" />
        <Picker.Item label="UML" value="uml" />
      </Picker>
      <TextInput placeholder="Questão"></TextInput>
      <TextInput placeholder="Resposta"></TextInput>
      <Button
        title="Criar novo quiz"
        onPress={() =>
          alert(
            "Quiz criado! O professor irá validar o quiz antes da publicação para o resto da turma."
          )
        }
      ></Button>
    </View>
  );
}
