import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import ViewGrades from "../src/TeacherScope/ViewGrades";

import TeacherProfileStackRouter from "./TeacherProfileStackRouter";
import TeacherClassesStackRouter from "./TeacherClassesStackRouter";

import TeacherActivitiesTabRouter from "./TeacherActivitiesTabRouter";
import TeacherQuizTabRouter from "./TeacherQuizTabRouter";

const { Navigator, Screen } = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}>
        <DrawerItem
          label="Logout"
          onPress={() => {
            props.navigation.navigate("Landing");
          }}
        />
      </DrawerItemList>
    </DrawerContentScrollView>
  );
}

export default function TeacherDrawerRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Screen name="Perfil" component={TeacherProfileStackRouter}></Screen>
        <Screen
          name="Disciplinas"
          component={TeacherClassesStackRouter}
        ></Screen>
        <Screen
          name="Atividades"
          component={TeacherActivitiesTabRouter}
        ></Screen>
        <Screen name="Quizzes" component={TeacherQuizTabRouter}></Screen>
        <Screen name="Ver Notas" component={ViewGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
