import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import StudentCourses from "../src/StudentScope/StudentCourses";
import Feedback360 from "../src/StudentScope/Feedback360";
import StudentGrades from "../src/StudentScope/StudentGrades";
import StudentGroups from "../src/StudentScope/StudentGroups";
import StudentSkills from "../src/StudentScope/StudentSkills";

import StudentProfileStackRouter from "./StudentProfileStackRouter";
import StudentCoursesStackRouter from "./StudentCoursesStackRouter";

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
        <Screen name="Ver Perfil" component={StudentProfileStackRouter}></Screen>
        <Screen name="Cursos" component={StudentCoursesStackRouter}></Screen>
        <Screen name="StudentSkills" component={StudentSkills}></Screen>
        <Screen name="Feedback360" component={Feedback360}></Screen>
        <Screen name="StudentGrades" component={StudentGrades}></Screen>
        <Screen name="StudentGroups" component={StudentGroups}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
