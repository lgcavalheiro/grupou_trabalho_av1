import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>STUDENT COURSES</Text>
      <Button
        title="Adicionar curso"
        onPress={() => {
          navigate("StudentCoursesEdit");
        }}
      ></Button>
    </View>
  );
}
