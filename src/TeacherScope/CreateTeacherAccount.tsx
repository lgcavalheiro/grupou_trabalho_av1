import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function CreateTeacherAccount() {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>CREATE TEACHER ACCOUNT</Text>
      <Button
        title="<TEACHER ACCOUNT CREATED>"
        onPress={() => goBack()}
      ></Button>
    </View>
  );
}
