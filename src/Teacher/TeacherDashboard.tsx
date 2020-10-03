import React from "react";
import { useNavigation } from "@react-navigation/native";

import TeacherDrawerRouter from "./Routes/TeacherDrawerRouter";

export default function TeacherDashboard() {
  const { navigate } = useNavigation();

  return (
    <>
      <TeacherDrawerRouter />
    </>
  );
}
