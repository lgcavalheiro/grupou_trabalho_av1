import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StudentSkills from "../src/StudentScope/StudentSkills";
import StudentSkillsEdit from "../src/StudentScope/StudentSkillsEdit";
import StudentSkillsQuiz from "../src/StudentScope/StudentSkillsQuiz";

const { Navigator, Screen } = createBottomTabNavigator();

export default function StudentSkillsTabRouter() {
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
