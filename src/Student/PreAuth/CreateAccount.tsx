import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>CREATE STUDENT ACCOUNT</Text>
      <Button
        title="<STUDENT ACCOUNT CREATED>"
        onPress={() => goBack()}
      ></Button>
    </View>
  );
}
