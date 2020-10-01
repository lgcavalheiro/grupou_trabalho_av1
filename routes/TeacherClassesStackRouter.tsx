import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Classes from "../src/TeacherScope/Classes";
import ClassesEdit from "../src/TeacherScope/ClassesEdit";

const { Navigator, Screen } = createStackNavigator();

export default function TeacherProfileStackRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Classes" component={Classes}></Screen>
        <Screen name="ClassesEdit" component={ClassesEdit}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
