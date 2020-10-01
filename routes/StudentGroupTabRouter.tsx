import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StudentGroups from "../src/StudentScope/StudentGroups";
import StudentGroupChat from "../src/StudentScope/StudentGroupChat";
import StudentGroupActivities from "../src/StudentScope/StudentGroupActivities";

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudentSkillsTabRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Integrantes" component={StudentGroups}></Screen>
        <Screen name="Chat do Grupo" component={StudentGroupChat}></Screen>
        <Screen
          name="Atividades do Grupo"
          component={StudentGroupActivities}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
