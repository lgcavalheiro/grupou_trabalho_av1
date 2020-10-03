import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ClassesView from "../Classes/Classes";
import ClassesEdit from "../Classes/ClassesEdit";

import TeacherProfile from "../Profile/Profile";
import TeacherProfileEdit from "../Profile/ProfileEdit";

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
