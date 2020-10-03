import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function TeacherProfileEdit() {
  const { goBack } = useNavigation();

  return (
    <View>
      <Text>TEACHER PROFILE EDIT</Text>
      <Button title="Pronto" onPress={() => goBack()}></Button>
    </View>
  );
}
