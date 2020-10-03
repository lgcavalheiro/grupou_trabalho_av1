import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StudentGroups from "../Groups/StudentGroups";
import StudentGroupChat from "../Groups/StudentGroupChat";
import StudentGroupActivities from "../Groups/StudentGroupActivities";

import StudentSkills from "../Skills/StudentSkills";
import StudentSkillsEdit from "../Skills/StudentSkillsEdit";
import StudentSkillsQuiz from "../Skills/StudentSkillsQuiz";

const { Navigator, Screen } = createBottomTabNavigator();

export function Group() {
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

export function Skills() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Skills de Interesse" component={StudentSkills}></Screen>
        <Screen name="Editar Skills" component={StudentSkillsEdit}></Screen>
        <Screen name="Editar Quizzes" component={StudentSkillsQuiz}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
