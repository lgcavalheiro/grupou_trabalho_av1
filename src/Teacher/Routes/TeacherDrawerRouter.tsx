import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Classes, Profile } from "./TeacherStackRouter";
import { Activities, Quiz } from "./TeacherTabRouter";

import ViewGrades from "../Other/ViewGrades";

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
        <Screen name="Perfil" component={Profile}></Screen>
        <Screen name="Disciplinas" component={Classes}></Screen>
        <Screen name="Atividades" component={Activities}></Screen>
        <Screen name="Quizzes" component={Quiz}></Screen>
        <Screen name="Ver Notas" component={ViewGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
