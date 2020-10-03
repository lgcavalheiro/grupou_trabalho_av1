import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

import StudentDrawerRouter from "./Routes/StudentDrawerRouter";

export default function StudentDashboard() {
  const { navigate } = useNavigation();

  return (
    <>
      <StudentDrawerRouter />
    </>
  );
}