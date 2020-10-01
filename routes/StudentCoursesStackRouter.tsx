import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentCourses from "../src/StudentScope/StudentCourses";
import StudentCoursesEdit from "../src/StudentScope/StudentCoursesEdit";

const { Navigator, Screen } = createStackNavigator();

export default function StudentCoursesStackRouter() {
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
