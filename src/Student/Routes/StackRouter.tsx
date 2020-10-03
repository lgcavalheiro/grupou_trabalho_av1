import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentCourses from "../Courses/Courses";
import StudentCoursesEdit from "../Courses/CoursesEdit";
import StudentProfile from "../Profile/Profile";
import StudentProfileEdit from "../Profile/ProfileEdit";

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