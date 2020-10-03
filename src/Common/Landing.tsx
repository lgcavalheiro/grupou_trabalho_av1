import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>O que você gostaria de fazer?</Text>
      <View style={styles.buttonContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 256,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
