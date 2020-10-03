import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StudentGroups from "../Groups/Groups";
import StudentGroupChat from "../Groups/GroupChat";
import StudentGroupActivities from "../Groups/GroupActivities";

import StudentSkills from "../Skills/Skills";
import StudentSkillsEdit from "../Skills/SkillsEdit";
import StudentSkillsQuiz from "../Skills/SkillsQuiz";

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
