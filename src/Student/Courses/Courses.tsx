import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>
        LISTA COM OS CURSOS DO ALUNO {"\n\n"}- Curso 1; {"\n"}- Curso 2; {"\n"}
      </Text>
      <Button
        title="Adicionar curso"
        onPress={() => {
          navigate("StudentCoursesEdit");
        }}
      ></Button>
    </View>
  );
}
