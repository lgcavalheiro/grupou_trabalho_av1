import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentCourses from "../StudentCourses";
import StudentCoursesEdit from "../StudentCoursesEdit";
import StudentProfile from "../StudentProfile";
import StudentProfileEdit from "../StudentProfileEdit";

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