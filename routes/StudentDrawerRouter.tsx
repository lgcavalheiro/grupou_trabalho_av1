import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Feedback360 from "../src/StudentScope/Feedback360";
import StudentGrades from "../src/StudentScope/StudentGrades";

import StudentProfileStackRouter from "./StudentProfileStackRouter";
import StudentCoursesStackRouter from "./StudentCoursesStackRouter";

import StudentSkillsTabRouter from "./StudentSkillsTabRouter";
import StudentGroupTabRouter from "./StudentGroupTabRouter";

const { Navigator, Screen } = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}>
        <DrawerItem
          label="Logout"
          onPress={() => {
            console.log("Landing");
          }}
        />
      </DrawerItemList>
    </DrawerContentScrollView>
  );
}

export default function StudentDrawerRouter() {
  return (
    <NavigationContainer independent={true}>
      <Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Screen
          name="Ver Perfil"
          component={StudentProfileStackRouter}
        ></Screen>
        <Screen name="Cursos" component={StudentCoursesStackRouter}></Screen>
        <Screen name="Skills" component={StudentSkillsTabRouter}></Screen>
        <Screen name="Grupo" component={StudentGroupTabRouter}></Screen>
        <Screen name="Feedback 360" component={Feedback360}></Screen>
        <Screen name="Avaliações" component={StudentGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
