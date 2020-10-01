import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TeacherProfile from "../src/TeacherScope/TeacherProfile";
import TeacherProfileEdit from "../src/TeacherScope/TeacherProfileEdit";

const { Navigator, Screen } = createStackNavigator();

export default function TeacherProfileStackRouter() {
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
