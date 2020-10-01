import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function ClassesEdit() {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>CLASSES EDIT</Text>
      <Button title="Pronto" onPress={() => goBack()}></Button>
    </View>
  );
}
