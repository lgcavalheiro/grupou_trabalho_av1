import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../src/Landing";
import StudentSignIn from '../src/StudentScope/StudentSignIn';
import TeacherSignIn from '../src/TeacherScope/TeacherSignIn';
import CreateStudentAccount from '../src/StudentScope/CreateStudentAccount';
import CreateTeacherAccount from '../src/TeacherScope/CreateTeacherAccount';
import StudentDashboard from '../src/StudentScope/StudentDashboard';
import TeacherDashboard from '../src/TeacherScope/TeacherDashboard';

const { Navigator, Screen } = createStackNavigator();

export default function StackRouter() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Landing" component={Landing}></Screen>
        <Screen name="StudentSignIn" component={StudentSignIn}></Screen>
        <Screen name="TeacherSignIn" component={TeacherSignIn}></Screen>
        <Screen name="CreateStudentAccount" component={CreateStudentAccount}></Screen>
        <Screen name="CreateTeacherAccount" component={CreateTeacherAccount}></Screen>
        <Screen name="StudentDashboard" component={StudentDashboard}></Screen>
        <Screen name="TeacherDashboard" component={TeacherDashboard}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
