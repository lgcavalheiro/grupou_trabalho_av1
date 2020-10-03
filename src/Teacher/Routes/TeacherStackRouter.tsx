import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ClassesView from "../Classes";
import ClassesEdit from "../ClassesEdit";

import TeacherProfile from "../TeacherProfile";
import TeacherProfileEdit from "../TeacherProfileEdit";

const { Navigator, Screen } = createStackNavigator();

export function Classes() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Classes" component={ClassesView}></Screen>
        <Screen name="ClassesEdit" component={ClassesEdit}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export function Profile() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="TeacherProfile" component={TeacherProfile}></Screen>
        <Screen
          name="TeacherProfileEdit"
          component={TeacherProfileEdit}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
