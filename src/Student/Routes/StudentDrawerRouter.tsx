import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Courses, Profile } from "./StudentStackRouter";
import { Group, Skills } from "./StudentTabRouter";

import Feedback360 from "../Feedback360";
import StudentGrades from "../StudentGrades";

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
        <Screen name="Ver Perfil" component={Profile}></Screen>
        <Screen name="Cursos" component={Courses}></Screen>
        <Screen name="Skills" component={Skills}></Screen>
        <Screen name="Grupo" component={Group}></Screen>
        <Screen name="Feedback 360" component={Feedback360}></Screen>
        <Screen name="Avaliações" component={StudentGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
