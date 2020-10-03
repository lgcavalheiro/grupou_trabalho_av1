import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, TextInput } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>
        LISTA DE DISCIPLINAS:{"\n\n"} - 001: Introdução à programação;{"\n"} -
        002: Raciocínio Lógico;{"\n\n"}
      </Text>
      <TextInput placeholder="Número da classe"></TextInput>
      <TextInput placeholder="Nome da disciplina"></TextInput>
      <Button
        title="Adicionar nova disciplina"
        onPress={() => {
          alert("Disciplina criada com sucesso!");
        }}
      ></Button>
      <Button
        title="Editar Disciplinas"
        onPress={() => {
          navigate("ClassesEdit");
        }}
      ></Button>
    </View>
  );
}
