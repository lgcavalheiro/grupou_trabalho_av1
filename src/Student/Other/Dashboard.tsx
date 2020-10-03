import React from "react";
import { useNavigation } from "@react-navigation/native";

import StudentDrawerRouter from "../Routes/DrawerRouter";

export default function StudentDashboard() {
  const { navigate } = useNavigation();

  return (
    <>
      <StudentDrawerRouter />
    </>
  );
}
