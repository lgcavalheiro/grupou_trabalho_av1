import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function () {
  const [selectedValue, setSelectedValue] = useState("iniciante");

  return (
    <View>
      <Text>
        LISTA DE SKILLS DO ALUNO (nome/nível):{"\n\n"}- Python : Intermediário;{" "}
        {"\n"}- Javascript : Iniciante; {"\n"}- UML : Avançado; {"\n\n"}{" "}
        Adicione uma nova skill: {"\n\n"}
      </Text>
      <TextInput placeholder="Nome da skill"></TextInput>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Iniciante" value="iniciante" />
        <Picker.Item label="Intermediário" value="intermediario" />
        <Picker.Item label="Avançado" value="avancado" />
      </Picker>
      <Button
        title="Adicionar Skill"
        onPress={() => alert("Skill adicionada")}
      ></Button>
    </View>
  );
}
