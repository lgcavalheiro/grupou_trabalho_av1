import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../Landing";
import StudentSignIn from "../../Student/StudentSignIn";
import TeacherSignIn from "../../Teacher/TeacherSignIn";
import CreateStudentAccount from "../../Student/CreateStudentAccount";
import CreateTeacherAccount from "../../Teacher/CreateTeacherAccount";
import StudentDashboard from "../../Student/StudentDashboard";
import TeacherDashboard from "../../Teacher/TeacherDashboard";

const { Navigator, Screen } = createStackNavigator();

export default function StackRouter() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Landing" component={Landing}></Screen>
        <Screen name="StudentSignIn" component={StudentSignIn}></Screen>
        <Screen name="TeacherSignIn" component={TeacherSignIn}></Screen>
        <Screen
          name="CreateStudentAccount"
          component={CreateStudentAccount}
        ></Screen>
        <Screen
          name="CreateTeacherAccount"
          component={CreateTeacherAccount}
        ></Screen>
        <Screen name="StudentDashboard" component={StudentDashboard}></Screen>
        <Screen name="TeacherDashboard" component={TeacherDashboard}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
