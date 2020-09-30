import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

import TeacherDrawerRouter from "../../routes/TeacherDrawerRouter";

export default function TeacherDashboard() {
  const { navigate } = useNavigation();

  return (
    <>
      <Text>TEACHER DASHBOARD</Text>
      <TeacherDrawerRouter />
    </>
  );
}
