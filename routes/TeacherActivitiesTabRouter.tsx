import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Activities from "../src/TeacherScope/Activities";
import ActivitiesEdit from "../src/TeacherScope/ActivitiesEdit";
import ActivitiesGrades from "../src/TeacherScope/ActivitiesGrades";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TeacherActivitiesTabRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator>
        <Screen name="Atividades" component={Activities}></Screen>
        <Screen name="Editar Atividades" component={ActivitiesEdit}></Screen>
        <Screen name="Corrigir Atividades" component={ActivitiesGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
