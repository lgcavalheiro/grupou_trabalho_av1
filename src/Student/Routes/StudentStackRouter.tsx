import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentCourses from "../Courses/StudentCourses";
import StudentCoursesEdit from "../Courses/StudentCoursesEdit";
import StudentProfile from "../Profile/StudentProfile";
import StudentProfileEdit from "../Profile/StudentProfileEdit";

const { Navigator, Screen } = createStackNavigator();

export function Courses() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="StudentCourses" component={StudentCourses}></Screen>
        <Screen
          name="StudentCoursesEdit"
          component={StudentCoursesEdit}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export function Profile() {
    return (
      <NavigationContainer independent={true}>
        <Navigator>
          <Screen name="StudentProfile" component={StudentProfile}></Screen>
          <Screen name="StudentProfileEdit" component={StudentProfileEdit}></Screen>
        </Navigator>
      </NavigationContainer>
    );
  }