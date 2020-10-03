import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, TextInput } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>Preencha o hash code do curso:{"\n"}</Text>
      <TextInput placeholder="Hash Code"></TextInput>
      <Button
        title="Pronto"
        onPress={() => {
          alert("Curso adicionado com sucesso!");
          goBack();
        }}
      ></Button>
      <Text>Ou escaneie o QR code do curso{"\n"}</Text>
      <Button
        title="Escanear QR Code"
        onPress={() => {
          alert("QR Code lido. Curso adicionado com sucesso!");
          goBack();
        }}
      ></Button>
    </View>
  );
}
