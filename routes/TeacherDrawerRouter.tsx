import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Activities from "../src/TeacherScope/Activities";
import Classes from "../src/TeacherScope/Classes";
import ManageQuizzes from "../src/TeacherScope/ManageQuizzes";
import ViewGrades from "../src/TeacherScope/ViewGrades";
import TeacherStackRouter from "./TeacherStackRouter";

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
        <Screen name="Perfil" component={TeacherStackRouter}></Screen>
        <Screen name="Activities" component={Activities}></Screen>
        <Screen name="Classes" component={Classes}></Screen>
        <Screen name="ManageQuizzes" component={ManageQuizzes}></Screen>
        <Screen name="ViewGrades" component={ViewGrades}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
