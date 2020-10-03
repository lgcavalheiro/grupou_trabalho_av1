import React from "react";
import { useNavigation } from "@react-navigation/native";

import TeacherDrawerRouter from "../Routes/DrawerRouter";

export default function TeacherDashboard() {
  const { navigate } = useNavigation();

  return (
    <>
      <TeacherDrawerRouter />
    </>
  );
}
