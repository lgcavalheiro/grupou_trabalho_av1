import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { Classes, Profile } from "./StackRouter";
import { Activities, Quiz } from "./TabRouter";

import ViewGrades from "../Other/ViewGrades";

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
        <Screen name="Perfil" component={Profile}></Screen>
        <Screen name="Disciplinas" component={Classes}></Screen>
        <Screen name="Atividades" component={Activities}></Screen>
        <Screen name="Quizzes" component={Quiz}></Screen>
        <Screen name="Ver Notas" component={ViewGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
