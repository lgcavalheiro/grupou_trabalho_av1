import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>LANDING</Text>
      <Button
        title="Assistir aulas"
        onPress={() => {
          navigate("StudentSignIn");
        }}
      />
      <Button
        title="Dar aulas"
        onPress={() => {
          navigate("TeacherSignIn");
        }}
      />
    </View>
  );
}
