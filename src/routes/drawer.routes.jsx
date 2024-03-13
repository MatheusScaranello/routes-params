import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Details from "../screens/Details";

import { User } from "../data/Profile";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        initialParams={{ User }}
      />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
