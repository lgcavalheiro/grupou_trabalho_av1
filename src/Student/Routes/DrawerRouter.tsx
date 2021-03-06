import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Courses, Profile } from "./StackRouter";
import { Group, Skills } from "./TabRouter";

import Feedback360 from "../Other/Feedback360";
import StudentGrades from "../Other/Grades";

const { Navigator, Screen } = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const { navigate } = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair &times;"
        onPress={() => {
          navigate("Landing");
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function () {
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
