import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

export default function () {
  const { navigate } = useNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Acesse sua conta agora</Text>
      <TextInput placeholder="Login" textContentType="username"></TextInput>
      <TextInput
        placeholder="Senha"
        textContentType="password"
        secureTextEntry={true}
      ></TextInput>
      <Button
        title="Logar como aluno"
        onPress={() => {
          navigate("StudentDashboard");
        }}
      />
      <Text style={styles.subtitle}>Ou cadastre-se</Text>
      <Button
        title="Criar conta de aluno"
        onPress={() => {
          navigate("CreateStudentAccount");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
  },
});
