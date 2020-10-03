import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ActivitiesView from "../Activities/Activities";
import ActivitiesEdit from "../Activities/ActivitiesEdit";
import ActivitiesGrades from "../Activities/ActivitiesGrades";

import QuizView from "../Quiz/Quiz";
import QuizEdit from "../Quiz/QuizEdit";
import QuizValidate from "../Quiz/QuizValidate";

const { Navigator, Screen } = createBottomTabNavigator();

export function Activities() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Atividades" component={ActivitiesView}></Screen>
        <Screen name="Editar Atividades" component={ActivitiesEdit}></Screen>
        <Screen
          name="Corrigir Atividades"
          component={ActivitiesGrades}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}

export function Quiz() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Quizzes" component={QuizView}></Screen>
        <Screen name="Editar Quizzes" component={QuizEdit}></Screen>
        <Screen name="Validar Quizzes" component={QuizValidate}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
