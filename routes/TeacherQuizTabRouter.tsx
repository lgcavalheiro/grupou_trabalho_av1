import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Quiz from "../src/TeacherScope/Quiz";
import QuizEdit from "../src/TeacherScope/QuizEdit";
import QuizValidate from "../src/TeacherScope/QuizValidate";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TeacherQuiztabRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Quizzes" component={Quiz}></Screen>
        <Screen name="Editar Quizzes" component={QuizEdit}></Screen>
        <Screen name="Validar Quizzes" component={QuizValidate}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
