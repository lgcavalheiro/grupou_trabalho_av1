import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StudentProfile from "../src/StudentScope/StudentProfile";
import StudentProfileEdit from "../src/StudentScope/StudentProfileEdit";

const { Navigator, Screen } = createStackNavigator();

export default function StudentProfileStackRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="StudentProfile" component={StudentProfile}></Screen>
        <Screen name="StudentProfileEdit" component={StudentProfileEdit}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
